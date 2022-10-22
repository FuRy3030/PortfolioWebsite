import styles from './TechnologiesCarousel.module.css';

import Carousel from 'react-bootstrap/Carousel';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarouselSlide (props: any) {
    return (
        <Carousel.Item className={styles.carouselItem} {...props}>
            <h3 className={styles.carouselHeader}>{props.title}</h3>
            <Divider />
            <div className={styles.technologiesStack}>
                {props.stack.map((technology: any) =>
                    <Chip 
                        icon = {<FontAwesomeIcon icon={technology.Icon} />} 
                        style = {{backgroundColor: technology.Color}} 
                        label = {technology.Name}
                        className = {styles.chipTechnology} 
                    />
                )}
            </div>
        </Carousel.Item>
    );
}

export default CarouselSlide;