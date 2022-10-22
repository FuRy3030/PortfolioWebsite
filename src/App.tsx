import React from 'react';
import './App.css';
import LandingScreen from './components/landing-screen/LandingScreen';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <LandingScreen />
    </React.Fragment>
  );
}

export default App;
