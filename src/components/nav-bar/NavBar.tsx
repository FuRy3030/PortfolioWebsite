import styles from './NavBar.module.css';

const NavBar = (props: any) => {
    return (
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
                </span>
            </div>
        </div>
    );
}

export default NavBar;