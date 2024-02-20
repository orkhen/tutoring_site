import React from 'react';

// Components
import Cover from '../../components/Cover/Cover'

// Styles
import './mainPage.css';
import Benefits from '../../components/Benefits/Benefits';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';

const MainPage = () => {
  return (
    <div className='main-page'>
      <Cover />
      <Benefits />
      <About />
      {/* <Projects /> */}
    </div>
  )
}

export default MainPage
