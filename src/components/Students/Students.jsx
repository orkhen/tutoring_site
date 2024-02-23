import React from 'react';

// Styles
import './students.css';

// Components
import { Splide, SplideSlide } from '@splidejs/react-splide';
import StudentCard from './StudentCard/StudentCard';
import Carousel from 'react-bootstrap/Carousel';

// Assets
import StudentAykhan from '../../assets/images/aykhan.png';

const Students = () => {
  return (
    <div className='students d-flex' id='opinions'>
      <div className="students-container d-flex flex-column">
        <div className="students-title">
            <h3>Tələbələrin fikirləri</h3>
        </div>

        <div className="students-opinions">
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
            >
                <Carousel.Item className='d-flex justify-content-center'>
                    <StudentCard photo={StudentAykhan} />
                </Carousel.Item>
            </Carousel>
        </div>

      </div>
    </div>
  )
}

export default Students
