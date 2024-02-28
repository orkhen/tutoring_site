import React from 'react';

// Styles
import './students.css';

// Components
import { Splide, SplideSlide } from '@splidejs/react-splide';
import StudentCard from './StudentCard/StudentCard';
import Carousel from 'react-bootstrap/Carousel';

// Assets
import StudentAykhan from '../../assets/images/aykhan.png';
import StudentAminZ from '../../assets/images/studentAminZ.jpg';
import StudentAminB from '../../assets/images/studentAminB.jpg';

const Students = () => {
  return (
    <div className='students d-flex' id='opinions'>
      <div className="students-container d-flex flex-column">
        <div className="students-title" data-aos="fade-up">
            <h3>Tələbələrin fikirləri</h3>
        </div>

        <div className="students-opinions" data-aos="fade-up">
            {/* <Splide
                className='students-cards-slide'
                options={{
                  type: 'slide',
                  drag: 'free',
                  perPage: 1,
                  arrows: false,
                  autoplay: true,
                  interval: 4500,
                  speed: 10000
                }}
            >
                <SplideSlide>
                    <StudentCard photo={StudentAykhan} />
                </SplideSlide>
            </Splide> */}

            <Carousel
              // indicators={false}
              // interval={0}
            >
                <Carousel.Item className=''>
                  <div className="carousel-item-container d-flex justify-content-center">
                    <StudentCard 
                      photo={StudentAykhan} 
                      name={'Aykhan Mustafayev'} 
                      uni={'KU Leuven tələbəsi'} 
                      opinion={'Asan, keyfiyyətli, və əla təlim. Orxan mənim üçün əvvəllər anlamaqda çətinlik çəkdiyim konseptləri çox gözəl izah etdi. Dərsləri çox rahat və dostcasına keçir, heç bir təzyiq yox idi. Hər dərsdən sonra keçdiyimiz mövzular üzrə mənə çox rahat və aydı materiallarla yanaşı praktiki ev tapşırıqları da verirdi.'} 
                    />
                  </div>
                </Carousel.Item>

                <Carousel.Item className=''>
                  <div className="carousel-item-container d-flex justify-content-center">
                    <StudentCard 
                      photo={StudentAminZ} 
                      name={'Amin Zeynalov'} 
                      uni={'Mugla University tələbəsi'} 
                      opinion={'Dərslər çox effektiv keçirdi, Orxan hər dərsdə mənim üçün xüsusilə ağır olan mövzuları daha rahat anlamağım üçün dəfələrlə o mövzular üzərində işləyir və yenidən onlara toxunurdu. Onun sayəsində yetərincə güclü proqramlaşdırma anlayışı və gözləntilərimi üstələyən nəticələr əldə etdim!'} 
                    />
                  </div>
                </Carousel.Item>

                <Carousel.Item className=''>
                  <div className="carousel-item-container d-flex justify-content-center">
                    <StudentCard 
                      photo={StudentAminB} 
                      name={'Amin Bağırov'} 
                      uni={'UNEC tələbəsi'} 
                      opinion={'Dərslər əsasən interaktiv keçdiyindən dərslərimiz qat-qat effektiv keçirdi. Orxan çox ünsiyyətcil və peşəkar bir müəllimdir. Dərslər çox aydın və rahat təşkil olunub, hər dərsdən sonra lazımi bütün materiallar ilə təmin edirdi. Çox faydalı və maraqlı təcrübə idi!'} 
                    />
                  </div>
                </Carousel.Item>
            </Carousel>
        </div>

      </div>
    </div>
  )
}

export default Students
