import React from 'react';
import './projectCard.css';

const ProjectCard = ({company, position, info, img, moreURL}) => {
  return (
    <div className='project-card d-flex'>
      <div className="project-card-content d-flex flex-column">
        <div className="project-card-title d-flex flex-column mt-4">
          <h3>{company}</h3>
          <h3>{position}</h3>
        </div>

        <div className="project-card-info">
          <p>{info}</p>
        </div>

        <div className={`project-card-more ${!moreURL && 'd-none'}`}>
          <a href={moreURL}>Daha ətraflı</a>
        </div>
      </div>

      <div className="project-card-img" style={{backgroundImage: `url(${img})`}}>
        {/* Background image goes here */}
      </div>
    </div>
  )
}

export default ProjectCard
