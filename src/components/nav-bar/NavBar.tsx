import styles from './NavBar.module.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props: any) => {
    const MobileMenuRef: any = useRef(null);

    const OpenMobileMenu: () => void = () => {
        MobileMenuRef.current.style.display = 'flex';
    };
    const CloseMobileMenu: () => void = () => {
        MobileMenuRef.current.style.display = 'none';
    };

    const navigate = useNavigate();

    const HomeRedirect: () => any = () => {
        return navigate("/home");
    };

    const SkillsFrontEndRedirect: () => any = () => {
        MobileMenuRef.current.style.display = 'none';
        return navigate("/skills/front-end");
    };
    const SkillsBackEndRedirect: () => any = () => {
        MobileMenuRef.current.style.display = 'none';
        return navigate("/skills/back-end");
    };
    const SkillsOtherRedirect: () => any = () => {
        MobileMenuRef.current.style.display = 'none';
        return navigate("/skills/other");
    };

    const QuarereRedirect: () => any = () => {
        MobileMenuRef.current.style.display = 'none';
        return navigate("/projects/quarere");
    };
    const ITQuestRedirect: () => any = () => {
        MobileMenuRef.current.style.display = 'none';
        return navigate("/projects/it-quest");
    };
    const CodexRedirect: () => any = () => {
        MobileMenuRef.current.style.display = 'none';
        return navigate("/projects/codex");
    };

    return (
        <React.Fragment>
            <div className={props.isLandingScreenVisible == false ? 
                `${styles.navbar}` : `${styles.navbar} ${styles.navbarDark}`}
            >
                <h2 className={styles.navbarHeader} onClick={HomeRedirect}>
                    Adam Duda
                </h2>
                <div className={styles.navbarContent}>
                    <span className={styles.navbarLink}>
                        Skills & Technologies
                        <div className={styles.navbarDropdown}>
                            <span onClick={SkillsFrontEndRedirect}>
                                <FontAwesomeIcon icon={faWandMagicSparkles} /> Front End Technologies
                            </span>
                            <span onClick={SkillsBackEndRedirect}>
                                <FontAwesomeIcon icon={faCode} /> Back End Technologies
                            </span>
                            <span onClick={SkillsOtherRedirect}>
                                <FontAwesomeIcon icon={faDatabase} /> Other Technologies
                            </span>
                        </div>
                    </span>
                    <span className={styles.navbarLink}>
                        Projects
                        <div className={`${styles.navbarDropdown} ${styles.navbarDropdownSmall}`}>
                            <span onClick={QuarereRedirect}>
                                <FontAwesomeIcon icon={faLanguage} /> Quarere
                            </span>
                            <span onClick={ITQuestRedirect}>
                                <FontAwesomeIcon icon={faGraduationCap} /> IT.Quest
                            </span>
                            <span onClick={CodexRedirect}>
                                <FontAwesomeIcon icon={faCode} /> Codex
                            </span>
                        </div>
                    </span>
                </div>
                <FontAwesomeIcon 
                    icon={faBars} 
                    className={styles.mobileMenuButton} 
                    onClick={OpenMobileMenu}
                />
            </div>
            <div className={styles.mobileMenu} ref={MobileMenuRef}>
                <FontAwesomeIcon 
                    icon={faXmark} 
                    className={styles.closeIcon} 
                    onClick={CloseMobileMenu}
                />
                <span className={styles.mobileLink}>
                    Skills & Technologies
                </span>
                <div className={styles.mobileDropdown}>
                    <span onClick={SkillsFrontEndRedirect} className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faWandMagicSparkles} /> Front End Skills
                    </span>
                    <span onClick={SkillsBackEndRedirect} className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faCode} /> Back End Skills
                    </span>
                    <span onClick={SkillsOtherRedirect} className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faDatabase} /> Other Skills
                    </span>
                </div>
                <span className={styles.mobileLink}>
                    Projects
                </span>
                <div className={styles.mobileDropdown}>
                    <span onClick={QuarereRedirect} className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faLanguage} /> Quarere
                    </span>
                    <span onClick={ITQuestRedirect} className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faGraduationCap} /> IT.Quest
                    </span>
                    <span onClick={CodexRedirect} className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faCode} /> Codex
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;