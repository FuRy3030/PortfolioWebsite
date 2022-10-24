import styles from './LandingScreen.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TechnologiesCarousel from '../technologies-carousel/TechnologiesCarousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LandingScreen() {
    return (
        <div className={styles.landingScreen} style={{display: "flex"}}>
            <Container fluid>
                <Row style={{height: "100%", marginBottom: '10px'}}>
                    <Col xs={12} md={6} style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        flexDirection: 'column',
                        marginBottom: '30px'
                    }}>
                        <h1 className={styles.mainHeader}>
                            Adam Duda
                        </h1>
                        <h4 className={styles.subHeader}>
                            Passionate Full-Stack Developer
                        </h4>
                        <button className={`lifting-button ${styles.landingButton}`}>
                            About Me 
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} style={{marginBottom: '30px'}}>
                        <TechnologiesCarousel />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{
                        display: 'flex', 
                        justifyContent: 'space-evenly'
                    }}>
                        <div className='scrolldown'>
                            <div className="chevrons">
                                <div className='chevronDown'></div>
                                <div className='chevronDown'></div>
                            </div>
                        </div>
                        <div className='scrolldown'>
                            <div className="chevrons">
                                <div className='chevronDown'></div>
                                <div className='chevronDown'></div>
                            </div>
                        </div>
                        <div className='scrolldown'>
                            <div className="chevrons">
                                <div className='chevronDown'></div>
                                <div className='chevronDown'></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LandingScreen;