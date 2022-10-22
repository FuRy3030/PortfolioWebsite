import styles from './TechnologiesCarousel.module.css';

import Carousel from 'react-bootstrap/Carousel';
import Divider from '@mui/material/Divider';

function CarouselSlide () {
    return (
        <Carousel.Item className={styles.carouselItem}>
            <h3 className={styles.carouselHeader}>Front End</h3>
            <Divider />
        </Carousel.Item>
    );
}

export default CarouselSlide;