import React, { useEffect } from 'react';
import MainPage from './pages/MainPage/MainPage';
import AOS from 'aos';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <div className='app'>
      <MainPage />
    </div>
  );
}

export default App;
