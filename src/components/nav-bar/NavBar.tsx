import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
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