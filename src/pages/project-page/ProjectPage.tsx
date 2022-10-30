import React from 'react';
import styles from './ProjectPage.module.css';

import PageWrapper from '../../components/page-wrapper/PageWrapper';
import ImagesList from '../../components/images-list/ImagesList';
import TechnologiesSummary from '../../components/technologies-summary/TechnologiesSummary';
import MobileTechnologySummary from '../../components/mobile-technologies-summary/MobileTechnologiesSummary';

import { Container, Row, Col } from 'react-bootstrap';

const ProjectPage = (props: any) => {
    return (
        <PageWrapper style={{padding: '0px 10px 0px 0px', display: 'flex'}}>
            <div className={styles.leftBar}>
                <TechnologiesSummary technologies={props.project.Technologies} />
            </div>
            <Container fluid style={{paddingTop: '80px'}} className={styles.pageContent}>
                <Row>
                    <Col xs={12} className={styles.contentScreen}>
                        <video key={props.id} controls className={styles.video}>
                            <source src={`/videos/${props.project.Video}.mp4`} type="video/mp4" />
                        </video>
                        <h1 className={styles.header}>{props.project.Name}</h1>
                        {props.project.Paragrahs.map((paragraph: any, index: number) => {
                            return <p className={styles.paragraph} key={index}>{paragraph}</p>
                        })}
                        <MobileTechnologySummary technologies={props.project.Technologies} />
                        <ImagesList images={props.project.Images} />
                    </Col>
                </Row>
            </Container>
        </PageWrapper>
    )
};

export default ProjectPage;