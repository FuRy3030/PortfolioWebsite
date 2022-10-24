import styles from './SkillsShortcut.module.css';
import React from 'react';

import Col from 'react-bootstrap/Col';
import { Divider } from '@mui/material';
import { Rating } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SkillsWithExpeirence {
    Languages: {
        Name: string;
        Rating: number;
    } [];
    FrameworksLibraries: {
        Name: string;
        Rating: number;
    } [];
};

const MySkills: SkillsWithExpeirence = {
    Languages: [
        {
            Name: 'CSS',
            Rating: 4.5
        },
        {
            Name: 'JavaScript',
            Rating: 4.5
        },
        {
            Name: 'SQL',
            Rating: 4
        },
        {
            Name: 'TypeScript',
            Rating: 1
        }
    ],
    FrameworksLibraries: [
        {
            Name: 'jQuery',
            Rating: 4
        },
        {
            Name: 'Bootstrap',
            Rating: 4
        },
        {
            Name: 'React',
            Rating: 3
        },
        {
            Name: 'Enity Framework',
            Rating: 2.5
        }
    ]
}

const SkillsShortcut = () => {
    return (
        <React.Fragment>
            <div className={styles.skillsShortcut}>
                <Col xs={12} md={6} style={{marginBottom: '30px'}}>
                    <div className={styles.card}>
                        <React.Fragment>
                            <h2 className={styles.cardHeader}>Languages</h2>
                            <div className={styles.headelineDescriptors}>
                                <span>Language</span>
                                <span>Experience</span>
                            </div>
                            <Divider style={{borderColor: 'rgb(0 0 0 / 65%)', marginBottom: '25px'}}/>
                            <>{MySkills.Languages.map((Language: any, index: number) =>
                                <div className={styles.cardRatingRow} key={index}>
                                    <span>{Language.Name}</span>
                                    <Rating name="read-only" value={Language.Rating} readOnly 
                                        size="large" precision={0.5} max={7}
                                    />
                                </div>
                            )}</>
                        </React.Fragment>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{marginBottom: '30px'}}>
                    <div className={styles.card}>
                        <h2 className={styles.cardHeader}>Frameworks / Libraries</h2>
                        <div className={styles.headelineDescriptors}>
                            <span>Framework / Library</span>
                            <span>Experience</span>
                        </div>
                        <Divider style={{borderColor: 'rgb(0 0 0 / 65%)', marginBottom: '25px'}}/>
                        <>{MySkills.FrameworksLibraries.map((FrameworkLibrary: any, index: number) =>
                            <div className={styles.cardRatingRow} key={index}>
                                <span>{FrameworkLibrary.Name}</span>
                                <Rating name="read-only" value={FrameworkLibrary.Rating} readOnly 
                                    size="large" precision={0.5} max={7}
                                />
                            </div>
                        )}</>
                    </div>
                </Col>
            </div>
            <div className={styles.buttonRow}>
                <button className={`lifting-button`}>
                    See Full List
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <Col xs={12} style={{
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '30px'
            }}>
                <div className='scrolldown'>
                    <div className="chevrons">
                        <div className='chevronDown'></div>
                        <div className='chevronDown'></div>
                    </div>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default SkillsShortcut;