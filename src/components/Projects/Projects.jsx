import React, { useState, useEffect } from 'react';

// Styles
import './projects.css';

// Components
import ProjectCard from './ProjectCard/ProjectCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Assets
import AllrentCover from '../../assets/images/allrent.png';
import ABACover from '../../assets/images/aba.jpg';
import TelegramBotCover from '../../assets/images/telegram-bot.png';
import MobileAppCover from '../../assets/images/mobile-application.png';
import CalendarCover from '../../assets/images/calendar.png';
import PyGameCover from '../../assets/images/pygame.jpg';
import WeatherAppCover from '../../assets/images/weather-app.png';

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const regulateSplide = () => {
    if (windowWidth > 992) {
      return 3;
    } else if (windowWidth > 768) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <div className='projects' id='experience'>
        <div className="projects-container d-flex flex-column align-items-center">
            <div className="projects-title" data-aos="fade-up">
                <h3>Təcrübə və Proyektlər</h3>
            </div>

            <div className="projects-cards mt-5" data-aos="fade-up">
              <Splide
                className='project-cards-slide'
                options={{
                  type: 'loop',
                  drag: 'free',
                  rewind: true,
                  perPage: regulateSplide(),
                  autoplay: true,
                  interval: 2000,
                  speed: 50000,
                }}
              >
                <SplideSlide>
                  <ProjectCard 
                    company={'Allrent-də'} 
                    position={'Software Developer'} 
                    info={'Allrent-də bütün frontendi JavaScript, React js-lə sıfırdan yaradaraq, daha rahat UI/UX və daha sürətli performans əldə etmişəm.'}
                    img={AllrentCover}
                  />
                </SplideSlide>

                <SplideSlide>
                  <ProjectCard 
                    company={'ABA-da'} 
                    position={'Software Engineer'} 
                    info={'Fərqli növ data faylları avtomatik oxuyaraq uyğun API yaradaraq həmin dataları müxtəlif qrafiklərlə ifadə edən fullstack proyekt üzərində işləmişəm.'}
                    img={ABACover}
                  />
                </SplideSlide>

                <SplideSlide>
                  <ProjectCard 
                    company={'onPause'} 
                    position={'Software Developer'}
                    info={'Şəxsi proyektim olan fullstack mobil tətbiqi üçün JavaScript-in ən populyar frameworkları olan React-Native, Express js-dən istifadə edirəm.'}
                    img={MobileAppCover}
                  />
                </SplideSlide>

                <SplideSlide>
                  <ProjectCard 
                    company={'Müxtəlif məqsədli Telegram botlar'} 
                    // position={'Software Engineer'} 
                    info={'Python ilə film məsləhəti, gündəlik xəbərləri göndərən, daha mürəkkəb əmlak saytlarını mütəmadi yoxlayan kimi botlar yaradıram.'}
                    img={TelegramBotCover}
                  />
                </SplideSlide>

                <SplideSlide>
                  <ProjectCard 
                    company={'Desktop Kalendar'} 
                    // position={'Software Developer'} 
                    info={'Semestr proyekti kimi C# ilə Desktop üçün rahat və funksional Kalendar tətbiqi üzərində işləmişəm.'}
                    img={CalendarCover}
                  />
                </SplideSlide>

                <SplideSlide>
                  <ProjectCard 
                    company={'Python-la Ping Pong'} 
                    // position={'Software Developer'} 
                    info={'Python-un PyGame modulu ilə sadə və maraqlı Ping Pong oyunu ilə yanaşı istənilən növ video oyunlar yaradaraq dili daha dərindən öyrənin!'}
                    img={PyGameCover}
                  />
                </SplideSlide>

                <SplideSlide>
                  <ProjectCard 
                    company={'Hava proqnozu tətbiqi'} 
                    // position={'Software Developer'} 
                    info={'Fullstack web tətbiqi, backend Java Spring və frontend üçün React js, hazır zamanda müxtəlif yerlərdə hava proqnozları barədə məlumat verir. Hazırda iş altındadır.'}
                    img={WeatherAppCover}
                  />
                </SplideSlide>
              </Splide>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
