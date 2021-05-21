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
import { getTop100Companies } from './services/companies'
import SearchBar from './components/SearchBar'
import HamburgerMenu from './components/HamburgerMenu'
import SectionChartTable from './components/Sections/SectionChartTable'
import BannerScrolling from './components/BannerScrolling'
import Spinner from './components/Spinner'
import HeaderIdea from './components/HeaderIdea'
import { colors } from './services/color'
import Navbar from './components/Navbar'
import Tagline from './components/Tagline'
import SectionCompanyList from './components/Sections/SectionCompanyList'
import SectionSignUpLogin from './components/Sections/SectionSignUpLogin'

const axios = require('axios')

function App(props) {
  const [companies, setCompanies] = useState([])
  const [user, setUser] = useState(props.user)
  const [userCompany, setUserCompany] = useState()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getTop100Companies()
      .then((top100) => setCompanies(top100))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  useEffect(() => {
    if (user) {
      getUserCompaniesFromUser(user._id)
        .then((userCompaniesFromDB) => {
          setUserCompany(userCompaniesFromDB[0])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user])

  if (!companies) return <Spinner color={'F7A559'} />

  if (colors)
    return (
      <div className='App'>
        <HamburgerMenu />
        <Switch>
          <Route exact path='/'>
            <section
              style={{
                backgroundColor: colors[4].color,
                color: colors[4].backgroundColor,
                height: '90vh',
              }}
            >
              <Navbar />
              <Tagline />
            </section>
            <section
              style={{
                backgroundColor: colors[1].backgroundColor,
                color: colors[1].color,
              }}
            >
              <SectionCompanyList
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                companies={companies}
              />
            </section>
            <section
              style={{
                backgroundColor: colors[0].color,
                color: colors[0].backgroundColor,
              }}
            >
              {
                <SectionSignUpLogin
                  user={user}
                  setUser={setUser}
                  userCompany={userCompany}
                  setUserCompany={setUserCompany}
                />
              }
            </section>
            <section
              style={{
                backgroundColor: colors[1].backgroundColor,
                color: colors[1].color,
              }}
            ></section>
            <section
              style={{
                backgroundColor: colors[1].backgroundColor,
                color: colors[1].color,
              }}
            >
              {userCompany && user && (
                <SectionChartTable company={userCompany} />
              )}
            </section>
          </Route>
          <Route exact path='/companies/:id' component={CompanyDetails} />

          <Route exact path='/styleguide'>
            <Styleguide />
          </Route>
        </Switch>
      </div>
    )
  // }
}

export default App
