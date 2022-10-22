import styles from './TechnologiesCarousel.module.css';

import Carousel from 'react-bootstrap/Carousel';
import CarouselSlide from './CarouselItem';

function TechnologiesCarousel() {
    return (
        <div className={styles.carouselArea}>
            <Carousel>
                <Carousel.Item className={styles.carouselItem}>
                <h3 className={styles.carouselHeader}>Front End</h3>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default TechnologiesCarousel;