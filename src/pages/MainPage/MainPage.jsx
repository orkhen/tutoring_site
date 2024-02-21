import React from 'react';

// Components
import Cover from '../../components/Cover/Cover'
import Benefits from '../../components/Benefits/Benefits';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Students from '../../components/Students/Students';

// Styles
import './mainPage.css';
import '@splidejs/react-splide/css';
import Contacts from '../../components/Contacts/Contacts';

const MainPage = () => {
  return (
    <div className='main-page'>
      <Cover />
      <Benefits />
      <About />
      <Projects />
      <Students />
      <Contacts />
    </div>
  )
}

export default MainPage
