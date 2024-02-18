import React from 'react';

// Components
import Cover from '../../components/Cover/Cover'

// Styles
import './mainPage.css';
import Benefits from '../../components/Benefits/Benefits';
import About from '../../components/About/About';

const MainPage = () => {
  return (
    <div className='main-page'>
      <Cover />
      <Benefits />
      <About />
    </div>
  )
}

export default MainPage
