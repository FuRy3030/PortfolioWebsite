import styles from './NavBar.module.css';
import React from 'react';
import { useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props: any) => {
    const MobileMenuRef: any = useRef(null);

    const OpenMobileMenu: () => void = () => {
        MobileMenuRef.current.style.display = 'flex';
    };

    const CloseMobileMenu: () => void = () => {
        MobileMenuRef.current.style.display = 'none';
    };

    return (
        <React.Fragment>
            <div className={props.isLandingScreenVisible == false ? 
                `${styles.navbar} ${styles.navbarWhite}` : `${styles.navbar}`}
            >
                <h2 className={styles.navbarHeader}>
                    Adam Duda
                </h2>
                <div className={styles.navbarContent}>
                    <span className={styles.navbarLink}>
                        Skills & Technologies
                    </span>
                    <span className={styles.navbarLink}>
                        Projects
                        <div className={styles.navbarDropdown}>
                            <span><FontAwesomeIcon icon={faLanguage} /> Quarere</span>
                            <span><FontAwesomeIcon icon={faGraduationCap} /> IT.Quest</span>
                            <span><FontAwesomeIcon icon={faCode} /> Codex</span>
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
                <span className={styles.mobileLink}>
                    Projects
                </span>
                <div className={styles.mobileDropdown}>
                    <span className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faLanguage} /> Quarere
                    </span>
                    <span className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faGraduationCap} /> IT.Quest
                    </span>
                    <span className={styles.mobileDropdownLink}>
                        <FontAwesomeIcon icon={faCode} /> Codex
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NavBar;