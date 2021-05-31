import React from 'react';

const Header = (props) => {
  return (
    <div>
    <h1>{props.courseName}</h1>
    </div>
  )
}

const Content = (props) => {
  const [first, second , third] = props.courseParts;
  return (
    <div>
      <Part partNum={first.part1} partExercises={first.exercises1}></Part> 
      <Part partNum={second.part2} partExercises={second.exercises2}></Part>
      <Part partNum={third.part3} partExercises={third.exercises3}></Part>   
    </div>
  )
}

const Part = (props) => {
  return (
    <div>{'Part Name: ' + props.partNum + ', Number of Exercises: ' + props.partExercises}</div>
  )
}

const Total = (props) =>{
  const [first, second, third] = props.total;
  let sum = first.exercises1 + second.exercises2 + third.exercises3;
  return (
    <div>
      <p>Total number of exercises: {sum} </p>
    </div>
  )
}

const App = () => {
  let course = 'Half Stack application development';
  let parts = [
    {
      part1: 'Fundamentals of React',
      exercises1 : 10
    },
    
    {
      part2 : 'Using props to pass data',
      exercises2 : 7
    },
    
    {
      part3 : 'State of a component',
      exercises3 : 14
    }
  ]  
  return (
    <div>
      <Header courseName={course}/>
      <Content courseParts={parts}/>
      <Total total={parts}/>
    </div>
  )
}

export default App;
