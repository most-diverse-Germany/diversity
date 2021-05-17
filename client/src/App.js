import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Styleguide from './components/Styleguide'
import CompaniesList from './components/CompaniesList'
import Signup from './components/Signup'
import SearchBar from './components/SearchBar'

const axios = require('axios')

function App(props) {
  const [companies, setCompanies] = useState([])
  const [user, setUser] = useState(props.user)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('/api/companies')
      .then((response) => {
        setCompanies(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  const searchHandler = () => {
    
  }
  // console.log(companies)

  if (!companies) return <h1>Loading...</h1>
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Signup user={user} setUser={setUser} />
          <SearchBar
            term={searchTerm}
            searchKeyword={searchHandler}
            companies={companies} />
          <CompaniesList companies={companies} />
        </Route>
        <Route exact path='/styleguide'>
          <Styleguide />
        </Route>
      </Switch>
    </div>
  )
  // }
}
export default App
