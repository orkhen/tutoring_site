import React from 'react';

// Styles
import './about.css';

// Assets
import EducationIcon from '../../assets/icons/AboutEducation.svg';
import ExperienceIcon from '../../assets/icons/AboutExperience.svg';
import ExtraIcon from '../../assets/icons/AboutExtra.svg';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-container">
        <div className="about-title" data-aos="fade-up">
            <h3>Mənim haqqımda</h3>
        </div>

        <div className="about-blocks d-flex flex-column align-items-center">
            <div className="about-block d-flex align-items-center mt-5" data-aos="fade-left">
                <div className="about-block-icon">
                  <img src={EducationIcon} />
                </div>

                <div className="about-block-content">
                    <h5>Təhsil</h5>

                    <p className='mb-0'>
                        Çexiya, Praqada yerləşən Avropada ən nüfuzlu universitetlərindın biri olan Karlova Universitetində Kompyuter Elmləri üzrə Bakalavr təhsili almaqla yanaşı, qrupun ən aktiv və top şagirdlərindənəm!
                    </p>
                </div>
            </div>

            <div className="about-block second-block d-flex align-items-center" data-aos="fade-right">
                <div className="about-block-icon">
                  <img src={ExperienceIcon} />
                </div>

                <div className="about-block-content">
                    <h5>Təcrübə</h5>

                    <p className='mb-0'>
                      Hələ də tələbə olduğuma baxmayaraq, bir neçə startup və şirkətlərdə tech sahəsində işləmiş, və sərbəst olaraq full-stack proyektlər üzərində çalışmışam!
                    </p>
                </div>
            </div>

            <div className="about-block d-flex align-items-center" data-aos="fade-left">
                {/* <div className="about-block-img">
                    <img src={AboutEducation} alt='about-education' />
                </div> */}

                <div className="about-block-icon">
                  <img src={ExtraIcon} />
                </div>

                <div className="about-block-content">
                    <h5>Əlavə :)</h5>

                    <p className='mb-0'>
                    Təcrübə və bacarıqlarım yalnız tech sahəsi ilə məhdudiyyətlənmir! Əlavə olaraq təhsil sahəsində də professional təcrübəm və yuxarı səviyyəli ünsiyyət bacarıqlarım ilə dərslərimiz daha asan və maraqlı keçəcək! 
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
