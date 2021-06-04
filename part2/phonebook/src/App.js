import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Person = ({ persons, searchValue }) => { 
  if(searchValue.length > 0){
    return ( 
      persons.filter(person => person.name.toLowerCase().includes((searchValue.toLowerCase()))).map(filteredName => (
        <li key={filteredName.name}>
          {filteredName.name} , {filteredName.number}
        </li>
      )))
    
  }
  return ( 
    <div>
    <ul>
        {persons.map(person => 
          <li key={person.name}>
              {person.name} , {person.number}
          </li>
          )}
        </ul>
    </div>
  )
}

const Search = (props) => { 
  return ( 
    <div>
      <form>
        filter shown with 
        <input value={props.value} 
          onChange={props.onChange}>
        </input>
      </form>
    </div>
  )
}

const Form = (props) => { 
  return ( 
    <div>
       <form>
          <div>name: <input value={props.newName} onChange={props.handlePersonChange}/>
          <div>number: <input value={props.newNumber} onChange={props.handleNumberChange}/></div>
        <div><button type="submit" onClick={props.onClick}>add</button></div>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    // { name: 'Arto Hellas', number: '040-123456' },
    // { name: 'Ada Lovelace', number: '39-44-5323523' },
    // { name: 'Dan Abramov', number: '12-43-234345' },
    // { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handlePersonChange = (event) => { 
    event.preventDefault()
    if (persons.filter(e => e.name.toLowerCase() === event.target.value.toLowerCase()).length > 0) {
      window.alert(`${event.target.value} is already added to phonebook`)
      setNewName('')
    }
    else { 
      setNewName(event.target.value)
    }
  }

  const handleNumberChange = (event) => { 
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => { 
    event.preventDefault()
    setNewFilter(event.target.value)
  }

  const setPersonChange = (event) => { 
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={newFilter} onChange={handleFilterChange}></Search>
      <h2>Add a new</h2>
      <Form newName={newName} 
        handlePersonChange={handlePersonChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
        onClick={setPersonChange}>
      </Form>
      <h2>Numbers</h2>
      <ul>
        <Person persons={persons} searchValue={newFilter}></Person>
      </ul>
    </div>
  )
}

export default App
