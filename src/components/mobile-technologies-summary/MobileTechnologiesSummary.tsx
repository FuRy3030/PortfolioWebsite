import styles from './MobileTechnologySummary.module.css';

const MobileTechnologySummary = (props: any) => {
    return (
        <div className={styles.mobileTechnologySummary}>
            <div className={styles.mobileTechnologySummaryRow}>
                <img
                    className={styles.iconImage}
                    src={require(`./images/front-end.png`)}
                    alt='category icon'
                    loading="lazy"
                />
                <h4 className={styles.mobileSummaryHeader}>Front End</h4>
                {props.technologies.FrontEnd.map((technology: any, index: number) => {
                    return <span key={index} className={styles.mobileSummaryTechnology}>
                        {technology}
                    </span>
                })}
            </div>
            {props.technologies.BackEnd != null ? 
                <div className={styles.mobileTechnologySummaryRow}>
                    <img
                        className={styles.iconImage}
                        src={require(`./images/back-end.png`)}
                        alt='category icon'
                        loading="lazy"
                    />
                    <h4 className={styles.mobileSummaryHeader}>Back End</h4>
                    {props.technologies.BackEnd.map((technology: any, index: number) => {
                        return <span key={index} className={styles.mobileSummaryTechnology}>
                            {technology}
                        </span>
                    })}
                </div> 
                :
                <></>
            }
            <div className={styles.mobileTechnologySummaryRow}>
                <img
                    className={styles.iconImage}
                    src={require(`./images/other.png`)}
                    alt='category icon'
                    loading="lazy"
                />
                <h4 className={styles.mobileSummaryHeader}>Other</h4>
                {props.technologies.Other.map((technology: any, index: number) => {
                    return <span key={index} className={styles.mobileSummaryTechnology}>
                        {technology}
                    </span>
                })}
            </div>
        </div>
    )
};

export default MobileTechnologySummary;