import styles from './ProjectShortcut.module.css';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ProjectShortcutInner = styled.div`
    position: relative;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 65px;
    margin-bottom: 65px;
    border-radius: 10px;
    padding: 32px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(212, 213, 228, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(212, 213, 228, 1);
    box-shadow: 0px 0px 5px 0px rgba(212, 213, 228, 1);
    border: 1px solid rgb(232, 232, 240);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const ProjectShortcut = (props: any) => {
    return (
        <ProjectShortcutInner className={`${props.backgroundClassName}`}>
            <Row>
                <Col xs={12} sm={12} md={6} style={{display: 'flex', alignItems: 'center'}}>
                    <video className={styles.projectVideo} controls>
                        <source src={`/videos/${props.video}.mp4`} type="video/mp4" />
                    </video>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <h2 className={styles.projectHeader}>{props.name}</h2>
                    <p className={styles.projectDescription}>{props.description}</p>
                    <div className={styles.projectTechnologies}>
                        <span className={styles.projectTechnologiesType}>
                            Front-End:
                        </span>
                        <span className={styles.projectTechnologiesListFront}>
                            {props.frontEnd.reduce((previousValue: string, currentValue: string) => { 
                                return previousValue + ', ' + currentValue
                            })}
                        </span>
                    </div>
                    {props.backEnd && 
                        <div className={styles.projectTechnologies}>
                            <span className={styles.projectTechnologiesType}>
                                Back-End:
                            </span>
                            <span className={styles.projectTechnologiesListBack}>
                                {props.backEnd.reduce((previousValue: string, currentValue: string) => { 
                                    return previousValue + ', ' + currentValue
                                })}
                            </span>
                        </div>
                    }
                    <div className={styles.projectTechnologies}>
                        <span className={styles.projectTechnologiesType}>
                            Other:
                        </span>
                        <span className={styles.projectTechnologiesListOther}>
                            {props.other.reduce((previousValue: string, currentValue: string) => { 
                                return previousValue + ', ' + currentValue
                            })}
                        </span>
                    </div>
                    <div className={styles.buttonRow}>
                        <button className={`lifting-button ${styles.readMoreButton}`}>
                            Read More
                            <FontAwesomeIcon icon={faSquareArrowUpRight} />
                        </button>
                    </div>
                </Col>
            </Row>
        </ProjectShortcutInner>
    )
}

export default ProjectShortcut;