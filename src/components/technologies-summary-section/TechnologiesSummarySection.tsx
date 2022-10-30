import styles from './TechnologiesSummarySection.module.css';

const TechnologiesSummarySection = (props: any) => {
    return (
        <div className={styles.summarySection}>
            <h4 className={styles.summaryHeader}>{props.name}</h4>
            {props.technologies.map((technology: any, index: number) => {
                return <span key={index} className={styles.summaryTechnology}>{technology}</span>
            })}
        </div>
    )
};

export default TechnologiesSummarySection;