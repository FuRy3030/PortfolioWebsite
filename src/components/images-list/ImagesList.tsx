import * as React from 'react';
import styles from './ImagesList.module.css';
import { useState, useEffect } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} /> ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 20,
            fontFamily: `'League Spartan', sans-serif`,
            fontWeight: '600'
        },
    })
);

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ImagesList = (props: any) => {
    const [viewportWidth, setViewportWidthWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setViewportWidthWidth(window.innerWidth);       
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const [OpennesStates, setOpennesStates] = useState([false, false, false, false]);

    const OpenFullImage = (imageIndex: number) => {
        setOpennesStates((oldState) => {
            const newState = [...oldState];
            newState[imageIndex] = true;
            return newState;
        });
    };
    
    const CloseFullImage = (imageIndex: number) => {
        setOpennesStates((oldState) => {
            const newState = [...oldState];
            newState[imageIndex] = false;
            return newState;
        });
    };

    return (
        <div style={{marginTop: '30px'}}>
            <h2 className={styles.header}>Gallery</h2>
            <ImageList cols={viewportWidth >= 576 ? 2 : 1} rowHeight={'auto'} style={{gap: '16px'}}>
                {props.images.map((image: any, index: number) => (
                    <React.Fragment>
                        <LightTooltip title="View in full screen" placement="top" key={index}>
                            <ImageListItem key={index} onClick={() => OpenFullImage(index)}>
                                <img
                                    className={styles.image}
                                    src={require(`./images/${image}.png`)}
                                    alt='project image'
                                    loading="lazy"
                                />
                            </ImageListItem>
                        </LightTooltip>
                        <Dialog
                            key={index}
                            open={OpennesStates[index]}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => CloseFullImage(index)}
                            sx={{
                                '& .MuiDialog-paper': {
                                    maxWidth: '1050px'
                                }
                            }}
                        >
                            <img
                                className={styles.imageFullView}
                                src={require(`./images/${image}.png`)}
                                alt='project image'
                                loading="lazy"
                            />
                        </Dialog>
                    </React.Fragment>
                ))}
            </ImageList>
        </div>
    )
};

export default ImagesList;