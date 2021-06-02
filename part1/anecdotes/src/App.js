import React, { useState } from 'react'

const Button = (props) => {
  return ( 
    <div>
      <button onClick = {props.updateVote}>Vote</button> 
      <button onClick = {props.handleClick}>Next</button>
    </div>
  )
}

const Tracker = (props) => {
  const highest = Math.max(...props.points);
  return ( 
    <div>
      <div>
        {props.ane[props.points.indexOf(highest)]}
      </div>
      <div>
        has the highest votes with: {highest}
      </div> 
    </div> 
    
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  
  const randomQuote = () => {
    setSelected(Math.floor (Math.random() * (anecdotes.length - 1)))
  }

  const updateVote = () => { 
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  

  return (
    
    <div>
      <div><b>Anecdote of the Day</b></div>
      <div>{anecdotes[selected]}</div>
      <Button updateVote = {updateVote} handleClick={randomQuote} points={points} selected={selected}>Vote</Button>
      <div> has {points[selected]} votes</div>
      <div><b>Anecdote with the most votes</b></div>
      <Tracker points={points} ane={anecdotes}></Tracker>
    </div>
  )
}

export default App