import React from 'react';
import styledComponents from 'styled-components';
import styles from './SkillsStack.module.css';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Rating } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SkillsHeader = styledComponents.h1`
    position: relative;
    width: 90%;
    font-family: 'League Spartan', sans-serif;
    font-weight: 800;
    font-size: 45px;
    color: var(--dark-font-color);
    cursor: default;
    text-align: left;
    margin: 20px auto 35px auto;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 4px;
        background: var(--dark-font-color);
    }
`;

const SkillsStack = (props: any) => {
    return (
        <React.Fragment>
            <SkillsHeader>{props.skills.Type}</SkillsHeader>
            <Row className={styles.skillsStackRow}>
                <Col xs={12} md={6} style={{padding: '0px'}}>
                    <Timeline position="alternate" style={{padding: '0px', marginBottom: '40px'}}>
                        {props.skills.OrderList.map((skill: any, index: number) => {
                            return <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineConnector className={styles.completedConnector} />
                                    <TimelineDot className={styles.completedDot}>
                                        <CheckIcon />
                                    </TimelineDot>
                                    <TimelineConnector className={styles.completedConnector} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span" className={styles.contentHeader}>
                                        {skill.Name}
                                    </Typography>
                                    <Typography className={styles.contentSubHeader}>
                                        {skill.CatchyPhrase}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        })}
                    </Timeline>
                </Col>
                <Col xs={12} md={6}>
                    <h2 className="universalHeader">{props.skills.Header}</h2>
                    <h6 className="universalSubHeader">{props.skills.ShortDescription}</h6>
                    <div className={styles.card}>
                        <React.Fragment>
                            <h2 className={styles.cardHeader}>Technologies</h2>
                            <div className={styles.headelineDescriptors}>
                                <span>Technology</span>
                                <span>Experience</span>
                            </div>
                            <Divider style={{borderColor: 'rgb(0 0 0 / 65%)', marginBottom: '25px'}}/>
                            <>{props.skills.OrderList.map((Technology: any, index: number) =>
                                <div className={styles.cardRatingRow} key={index}>
                                    <span>{Technology.Name}</span>
                                    <Rating name="read-only" value={Technology.Rating} readOnly 
                                        size="large" precision={0.5} max={7}
                                    />
                                </div>
                            )}</>
                        </React.Fragment>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default SkillsStack;