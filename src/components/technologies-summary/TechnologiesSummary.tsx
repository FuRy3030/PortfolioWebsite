import styles from './TechnologiesSummary.module.css';

import TechnologiesSummarySection from '../technologies-summary-section/TechnologiesSummarySection';

const TechnologiesSummary = (props: any) => {
    return (
        <div className={styles.technologiesSummary}>
            <TechnologiesSummarySection name="Front End" technologies={props.technologies.FrontEnd} />
            {props.technologies.BackEnd != null ? 
                <TechnologiesSummarySection 
                    name="Back End" 
                    technologies={props.technologies.BackEnd} 
                /> : <></>}
            <TechnologiesSummarySection name="Other" technologies={props.technologies.Other} />
        </div>
    )
};

export default TechnologiesSummary;