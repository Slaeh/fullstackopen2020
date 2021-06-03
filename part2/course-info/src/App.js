import React from 'react'
import Course from './Course'

const Total = ({ course }) => { 
  const total = course.reduce(
    (prev, current) => prev + current.exercises, 0 
  );

  return (
    <div>
      <div>Total number of courses: {total}</div>
    </div>
  )
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
    <Course courseName={course[0].name} courseParts={course[0].parts}/>
    <Total course={course[0].parts}/>
    <Course courseName={course[1].name} courseParts={course[1].parts}/>
    <Total course={course[1].parts}/>
    </div>
  )
}

export default App