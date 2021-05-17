import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Styleguide from './components/Styleguide'
import CompaniesList from './components/CompaniesList'
import Signup from './components/Signup'
import CompanyDetails from './components/CompanyDetails'
import EditProfile from './components/EditProfile'
import Logout from './components/Logout'
import Login from './components/Login'
import Or from './components/Or'
import RegisterUserCompany from './components/RegisterUserCompany'
import UserCompany from './components/UserCompany'
import { getUserCompaniesFromUser } from './services/userCompanies'
import SearchBar from './components/SearchBar'

const axios = require('axios')

function App(props) {
  const [companies, setCompanies] = useState([])
  const [user, setUser] = useState(props.user)
  const [userCompany, setUserCompany] = useState()
  const [searchTerm, setSearchTerm] = useState('');
  
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

  useEffect(() => {
    if (user) {
      getUserCompaniesFromUser(user._id).then((userCompaniesFromDB) => {
        // console.log(userCompaniesFromDB[0])
        setUserCompany(userCompaniesFromDB[0])
      })
    } else {
      // setUserCompany(null)
    }
  }, [user])

  // console.log(companies)
  

  if (!companies) return <h1>Loading...</h1>
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Logout user={user} setUser={setUser} />
          <Login user={user} setUser={setUser} />
          {!user && <Or />}
          <Signup user={user} setUser={setUser} />

          {/* <ProtectedRoute
          path='/account/edit'
          user={user}
          setUser={setUser}
          component={EditProfile}
          redirectPath='/'
        /> */}
          {user && <EditProfile user={user} setUser={setUser} />}
          {user && <RegisterUserCompany setUserCompany={setUserCompany} />}
          {userCompany && <UserCompany userCompany={userCompany} />}

          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          
          <CompaniesList companies={companies} searchTerm={searchTerm} />

        </Route>
        {/* is it possible to do id param with new syntax? */}
        {/* <Route exact path='/companies/:id' component={CompanyDetails} /> */}
        <Route exact path='/styleguide'>
          <Styleguide />
        </Route>
        <Route exact path='/companies/:id' component={CompanyDetails} />
      </Switch>
    </div>
  )
  // }
}


export default App