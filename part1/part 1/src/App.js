import React from 'react'
const Hello = (props) => {
  return (
    <div><p>Hello {props.name}, you are {props.age} years old!</p></div>
  )
}

const App = () => {
  // const now = new Date();
  // const a = 10;
  // const b = 20;
  const name = "Peter";
  const age = 10;
  return (
  //   <div className="App">
  //     <p>Hello World, it is now {now.toString()}</p>
  //     <p>{a} + plus {b} is {a+b} </p>
  //   </div>
        <div>
          <h1>Greeting</h1>
          <Hello name="Daisy" age={26+10}/>
          <Hello name="George" age={18}/>
          <Hello name={name} age={age}/>
        </div>
   )
}

export default App;
