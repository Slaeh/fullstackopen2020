import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Country = (props) => { 
  return (
    <div>
      find countries
      <input onChange={props.onChange}></input>
    </div>
  )
}

const ShowCountry = ({countries, search, onClick}) => { 
  const filterThese = countries.filter(country => country.name.toLowerCase().includes((search.toLowerCase())))
  
  if(filterThese.length > 10){
    return (
      <div>Specify another filter</div>
    )
  }
  else if(filterThese.length === 1){
    return (
      filterThese.map(filteredCountry => (
        <div>
          {console.log('this is' ,filteredCountry)}
          <div><h2>{filteredCountry.name}</h2></div>
          <div>Capital: {filteredCountry.capital}</div>
          <div>Population: {filteredCountry.population}</div>
          <div>
            <h2>Languages</h2>
            {filteredCountry.languages.map(language =>
                <li>{language.name}</li>
            )}
          </div>
          <div><img src={filteredCountry.flag} alt='flag'></img></div>
        </div>
      ))
    )
  }
  else{
    return ( 
      filterThese.map(filteredCountry => (
        <li key={filteredCountry.name}>
          {filteredCountry.name}<button onClick={() => onClick(filteredCountry)}>Show</button>
        </li>
      )))
    
  }
}

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')
  console.log(countries)
  
  const handleSearch = (event) => { 
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleClick = (props) => { 
    setSearch(props.name)
    console.log('search is ', {search})
  }
  
  return (
    <div>
      <h1><b>Countries</b></h1>
      <Country onChange={handleSearch}></Country>
      <ShowCountry countries={countries} search={search} onClick={handleClick}></ShowCountry>
    </div>
  )
}

export default App;
