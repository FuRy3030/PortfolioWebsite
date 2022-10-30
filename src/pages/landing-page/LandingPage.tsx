import React from 'react';
import { useEffect, useRef } from 'react';
import '../../App.css';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingScreen from '../../components/landing-screen/LandingScreen';
import SkillsShortcut from '../../components/skills-shortcut/SkillsShortcut';
import ProjectShortcut from '../../components/project-shortcut/ProjectShortcut';
import TechnologiesStepper from '../../components/technologies-stepper/TechnologiesStepper';

interface Project {
  ClassName: string;
  Video: string;
  Name: string;
  Description: string;
  FrontEnd: string[];
  BackEnd?: string[];
  Other: string[];
  Path: string;
}

const MyProjects: Project[] = [
  {
    ClassName: 'projectShortcutQuarere',
    Video: 'QuarereVideo',
    Name: 'Quarere',
    Description: 'Have you ever been learning new language through reading different texts in it, ranging from books to articles? Most of us answer in the affirmative to this question. There comes a solution which allows for better and faster reading, creation of custom studying materials, learning new words, and more...',
    FrontEnd: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    BackEnd: ['C#', '.NET', 'ASP.NET Web API', 'ASP.NET Web Forms'],
    Other: ['SQL', 'Visual Studio'],
    Path: 'quarere'
  },
  {
    ClassName: 'projectShortcutItQuest',
    Video: 'ITQuest',
    Name: 'IT.Quest',
    Description: 'Creating reusable problem sets or exercises for students? This project allows for all of this with a features for conducting tests and assignments, convenient grading of students answers, and exporting their results. Moreover, application supports specific additions for IT classes like sending files or writing code in the browser...',
    FrontEnd: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    BackEnd: ['C#', '.NET Core', 'ASP.NET Core MVC', 'Entity Framework Core'],
    Other: ['SQL', 'Visual Studio'],
    Path: 'it-quest'
  },
  {
    ClassName: 'projectShortcutCodex',
    Video: 'CodexVideo',
    Name: 'Codex',
    Description: 'Hesitate which data structure or algorithm is the most suitable in a specific scenario for given task? This website helps determine the best choice by comparing solutions by several categories, including time and space complexity, pros and cons, and exemplary cases of usage with code snippets and explanations...',
    FrontEnd: ['React', 'HTML', 'CSS', 'JavaScript', 'React Router', 'React Redux'],
    Other: ['Visual Studio Code'],
    Path: 'codex'
  }
]

const ProjectsHeader: any = styled.h1`
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  font-size: 70px;
  margin-top: 58px;
  margin-bottom: 18px;
  margin-left: auto;
  margin-right: auto;
  color: var(--dark-font-color);
  width: 90%;
  text-align: center;
  cursor: default;
`;

function LandingPage(props: any) {
  const LandingPageBackgroundElement: any = useRef(null);

  const updateHeaderStyle = (entries: any) => {
    const [ entry ] = entries;
    props.updateNavBarStyle(entry.isIntersecting);
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(updateHeaderStyle, options);
    observer.observe(LandingPageBackgroundElement.current);

    return () => {
      if (LandingPageBackgroundElement.current) {
        observer.unobserve(LandingPageBackgroundElement.current);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <div className='landingPageBackgroundArea' ref={LandingPageBackgroundElement}>
        <LandingScreen />
        <Container fluid>
          <Row className='skillsBackground'>
            <Col xs={12} id="SkillsShortcut">
              <TechnologiesStepper />
              <SkillsShortcut />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <ProjectsHeader> My Projects </ProjectsHeader>
            {MyProjects.map((Project: any, index: number) => {
              return <ProjectShortcut
                key={index} 
                backgroundClassName={Project.ClassName}
                video={Project.Video}
                name={Project.Name}
                description={Project.Description}
                frontEnd={Project.FrontEnd}
                backEnd={Project.BackEnd}
                other={Project.Other}
                path={Project.Path}
              />
            })}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default LandingPage;