import styles from './TechnologiesCarousel.module.css';

import { useRef, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

interface TechnologiesStack {
    Headline: string;
    Technologies: {
        Name: string;
        Icon: IconDefinition | null;
        Color: string;
        Key: number;
    } [];
    Key: number;
};

const MyList: TechnologiesStack[] = [
    {
        Key: 0,
        Headline: 'Front End',
        Technologies: [
            {
                Name: 'HTML',
                Icon: faHtml5,
                Color: '#FFD384',
                Key: 0
            },
            {
                Name: 'CSS',
                Icon: faCss3,
                Color: '#FFD384',
                Key: 1
            },
            {
                Name: 'JavaScript',
                Icon: faSquareJs,
                Color: '#F1A661',
                Key: 2
            },
            {
                Name: 'React',
                Icon: faReact,
                Color: '#F1A661',
                Key: 3
            },
            {
                Name: 'Bootstrap',
                Icon: faBootstrap,
                Color: '#FD841F',
                Key: 4
            },
            {
                Name: 'jQuery',
                Icon: faGears,
                Color: '#FD841F',
                Key: 5
            },
            {
                Name: 'Material-UI',
                Icon: faWandMagicSparkles,
                Color: '#E14D2A',
                Key: 6
            },
            {
                Name: 'DataTables',
                Icon: faTable,
                Color: '#E14D2A',
                Key: 7
            },
            {
                Name: 'CodeMirror',
                Icon: faWandMagicSparkles,
                Color: '#E14D2A',
                Key: 8
            },
            {
                Name: 'JSON',
                Icon: faDatabase,
                Color: '#DD5353',
                Key: 9
            },
            {
                Name: 'TypeScript',
                Icon: faCode,
                Color: '#DD5353',
                Key: 10
            },
            {
                Name: 'React Router',
                Icon: faCodeBranch,
                Color: '#CD104D',
                Key: 11
            },
            {
                Name: 'React Redux',
                Icon: faCodeBranch,
                Color: '#CD104D',
                Key: 12
            }
        ]
    },
    {
        Key: 1,
        Headline: 'Back End',
        Technologies: [
            {
                Name: 'C#',
                Icon: faCode,
                Color: '#9BA3EB',
                Key: 0
            },
            {
                Name: '.NET',
                Icon: faCodeBranch,
                Color: '#9BA3EB',
                Key: 1
            },
            {
                Name: '.NET Core',
                Icon: faCodeBranch,
                Color: '#646FD4',
                Key: 2
            },
            {
                Name: 'Entity Framework',
                Icon: faDatabase,
                Color: '#646FD4',
                Key: 3
            },
            {
                Name: 'Entity Framework Core',
                Icon: faDatabase,
                Color: '#646FD4',
                Key: 4
            },
            {
                Name: 'ASP.NET Web API',
                Icon: faEarthEurope,
                Color: '#2155CD',
                Key: 5
            },
            {
                Name: 'ASP.NET MVC',
                Icon: faEarthEurope,
                Color: '#2155CD',
                Key: 6
            },
            {
                Name: 'ASP.NET WebForms',
                Icon: faEarthEurope,
                Color: '#242F9B',
                Key: 7
            },
            {
                Name: 'Newtonsoft',
                Icon: faDatabase,
                Color: '#242F9B',
                Key: 8
            },
            {
                Name: 'LinQ',
                Icon: faGears,
                Color: '#5534A5',
                Key: 9
            }
        ]
    },
    {
        Key: 2,
        Headline: 'Other',
        Technologies: [
            {
                Name: 'SQL',
                Icon: faDatabase,
                Color: '#ffffff',
                Key: 0
            },
            {
                Name: 'GitHub',
                Icon: faGithub,
                Color: '#ffffff',
                Key: 1
            },
            {
                Name: 'Postman',
                Icon: faUncharted,
                Color: '#ffffff',
                Key: 2
            },
            {
                Name: 'Microsofl SQL Server',
                Icon: faDatabase,
                Color: '#ffffff',
                Key: 3
            },
            {
                Name: 'Visual Studio',
                Icon: faLaptopCode,
                Color: '#ffffff',
                Key: 4
            },
            {
                Name: 'Visual Studio Code',
                Icon: faLaptopCode,
                Color: '#ffffff',
                Key: 5
            },
        ]
    }
];

function TechnologiesCarousel() {
    const techStacksRefs = useRef(new Array<any>);

    useEffect(() => {
        const maxHeight: number = Math.max(
            techStacksRefs.current[0].offsetHeight, 
            techStacksRefs.current[1].offsetHeight,
            techStacksRefs.current[2].offsetHeight
        )

        for (let i = 0; i < 3; i++) {
            techStacksRefs.current[i].style.height = `${maxHeight}px`;
        }
    }, []);

    return (
        <div className={styles.carouselArea}>
            <Carousel>
                {MyList.map((Stack: any, index: number) => {
                    return <Carousel.Item className={styles.carouselItem} key={Stack.Key}>
                        <h3 className={styles.carouselHeader}>{Stack.Headline}</h3>
                        <Divider />
                        <div className={styles.technologiesStack} 
                            ref={(el: any) => techStacksRefs.current[index] = el}>
                            {Stack.Technologies.map((technology: any) => {
                                if (Stack.Headline == 'Other') {
                                    return <Chip 
                                        key={technology.Key}
                                        icon = {<FontAwesomeIcon icon={technology.Icon} />} 
                                        style = {{backgroundColor: technology.Color}} 
                                        label = {technology.Name}
                                        className = {styles.chipTechnologyAlt} 
                                    /> 
                                }
                                else {
                                    return <Chip 
                                        key={technology.Key}
                                        icon = {<FontAwesomeIcon icon={technology.Icon} />} 
                                        style = {{backgroundColor: technology.Color}} 
                                        label = {technology.Name}
                                        className = {styles.chipTechnology} 
                                    />
                                }
                            })}
                        </div>
                    </Carousel.Item>
                })}
            </Carousel>
        </div>
    );
}

export default TechnologiesCarousel;