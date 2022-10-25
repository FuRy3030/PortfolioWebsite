import * as React from 'react';
import styles from './TechnologiesStepper.module.css';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import VerifiedIcon from '@mui/icons-material/Verified';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const TechnologiesStepperConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: 'linear-gradient(90deg, #E0144C, #FF884B)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage: 'linear-gradient(90deg, #E0144C, #FF884B)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        border: 0,
        height: 2,
        borderRadius: 1,
    },
}));

const TechnologiesStepperStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme, ownerState }) => ({
        color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#eaeaf0',
        }),
        '& .TechnologiesStepperStepIcon-completedIcon': {
            zIndex: 1,
            fontSize: 20,
            color: '#FF884B'
        },
        '& .TechnologiesStepperStepIcon-circle': {
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: 'linear-gradient(90deg, #E0144C, #FF884B)',
        },
        '& .TechnologiesStepperStepIcon-target': {
            zIndex: 1,
            fontSize: 20,
            color: '#eaeaf0'
        },
    }),
);

const TechnologiesStepperStepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;
  
    return (
      <TechnologiesStepperStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <VerifiedIcon className="TechnologiesStepperStepIcon-completedIcon" />
        ) : active ? (
          <div className="TechnologiesStepperStepIcon-circle" />
        ) : <FontAwesomeIcon icon={faBullseye} />}
      </TechnologiesStepperStepIconRoot>
    );
};

const Technologies: string[] = [
    'SQL',
    'HTML / CSS',
    'JavaScript',
    'C# / .NET',
    'React',
    'TypeScript',
    'Angular / Vue.js'
];

const TechnologiesStepper = () => {
    return (
        <div style={{margin: '80px auto 35px auto', width: '96%'}}>
            <Stepper alternativeLabel activeStep={4} connector={<TechnologiesStepperConnector />}>
                {Technologies.map((label: string) => (
                    <Step key={label}>
                        <StepLabel 
                            className={styles.technologiesLabel} 
                            StepIconComponent={TechnologiesStepperStepIcon}
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default TechnologiesStepper;