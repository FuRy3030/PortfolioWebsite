import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LandingScreen from './components/landing-screen/LandingScreen';
import NavBar from './components/nav-bar/NavBar';
import SkillsShortcut from './components/skills-shortcut/SkillsShortcut';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className='landingPageBackgroundArea'>
        <LandingScreen />
        <Container fluid>
          <Row className='skillsBackground'>
            <Col xs={12}>
              <SkillsShortcut />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
