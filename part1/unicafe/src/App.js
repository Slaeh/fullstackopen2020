import React, { useState } from 'react'

const Button = ({handleClick , name }) => {
  return(
  <button onClick = {handleClick}>{name}</button>
  )
}

// const Stats = ({show, name}) => { 
//   return (
//     <div>{name}: {show}</div> 
//   );
// }

const Stats = ({good, neutral, bad }) => { 
  if(good === 0 && bad === 0 && neutral === 0){
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <td>
      <div>good: {good}</div> 
      <div>neutral: {neutral}</div> 
      <div>bad: {bad}</div> 
      <div>
      all : {good + neutral + bad}
      </div>
      <div>
      average: {(good - bad) / (good + neutral + bad)}
      </div>
      <div>
      positive: {(good / (good + neutral + bad)) * 100} %  
      </div>
    </td> 
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    setGood(good + 1);
  }

  const updateNeutral = () => {
    setNeutral(neutral + 1);
  }

  const updateBad = () => {
    setBad(bad + 1);
  }
  return (
    <div>
      <p>give feedback</p>
      <Button handleClick={updateGood} value={good} name='good'></Button>
      <Button handleClick={updateNeutral} value={neutral}name='neutral'></Button>
      <Button handleClick={updateBad} value={bad}name='bad'></Button>
      <p>statistics
      <Stats good ={good} neutral={neutral} bad={bad} name={'all'}></Stats>
      </p>
    </div>
  )
}

export default App
