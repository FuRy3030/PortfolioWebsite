import styles from './LandingScreen.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TechnologiesCarousel from '../technologies-carousel/TechnologiesCarousel';

function LandingScreen() {
    return (
        <div className={styles.landingScreen}>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>

                    </Col>
                    <Col xs={12} md={6}>
                        <TechnologiesCarousel />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LandingScreen;