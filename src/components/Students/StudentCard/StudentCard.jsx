import React from 'react';

// Styles
import './studentCard.css';

const StudentCard = ({name, uni, opinion, photo}) => {
  return (
    <div className='student-card d-flex'>
      <div className="student-card-img">
        <img src={photo} alt='student_img' />
      </div>

      <div className="student-card-content d-flex flex-column">
        <div className="student-card-info d-flex flex-column">
            <div className="student-card-name">
                <h4 className='mb-0'>{name}</h4>
            </div>

            <div className="student-card-uni">
                <h5>{uni}</h5>
            </div>
        </div>

        <div className="student-card-opinion">
            <p>{opinion}</p>
        </div>

      </div>
    </div>
  )
}

export default StudentCard
