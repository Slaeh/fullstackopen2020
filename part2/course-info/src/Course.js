import React from 'react'

const Course  = ({ courseName, courseParts }) => {
    return ( 
      <div>
        <h1><b>{courseName}</b></h1>
        <ul>
          {courseParts.map(courses => 
            <li key={courses.id}>
              {courses.name}
            </li>
          )}
        </ul>
      </div>
    )
  }

  export default Course