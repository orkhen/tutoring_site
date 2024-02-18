import React from 'react'

// Styles
import './about.css';

// Assets
import AboutEducation from '../../assets/images/about-education.png';

const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="about-title">
            <h3>Mənim haqqımda</h3>
        </div>

        <div className="about-blocks">
            <div className="about-block d-flex align-items-center">
                <div className="about-block-img">
                    <img src={AboutEducation} alt='about-education' />
                </div>

                <div className="about-block-content">
                    <h5>Təhsil</h5>

                    <p className='mb-0'>
                        Çexiya, Praqada yerləşən Avropada ən nüfuzlu universitetlərindın biri olan Karlova Universitetində Kompyuter Elmləri üzrə Bakalavr təhsili almaqla yanaşı, qrupun ən aktiv və top şagirdlərindənəm!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
