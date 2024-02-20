import React from 'react';

// Styles
import './projects.css';
import '@splidejs/react-splide/css';

// Components
import ProjectCard from './ProjectCard/ProjectCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Projects = () => {
  return (
    <div className='projects'>
        <div className="projects-container d-flex flex-column align-items-center">
            <div className="projects-title">
                <h3>Təcrübə və Proyektlər</h3>
            </div>

            <div className="projects-cards mt-5">
              <Splide
                className='project-cards-slide'
                options={{
                  type: 'loop',
                  drag: 'free',
                  perPage: 1,
                }}
              >
                <SplideSlide>
                  <ProjectCard />
                </SplideSlide>
              </Splide>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
