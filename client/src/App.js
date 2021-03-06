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
import BannerIdea from './components/BannerIdea'
import Spinner from './components/Spinner'
import HeaderIdea from './components/HeaderIdea'
import LogoNav from './components/LogoNav'
import SvgImg from './components/SvgImg'
import TrailImg from './components/TrailImg'
import Faq from './components/Faq'



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
          // console.log(userCompaniesFromDB[0])
          setUserCompany(userCompaniesFromDB[0])
          // console.log(userCompany)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user])

  // console.log(companies)

  if (!companies) return ( <Spinner /> )
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <HamburgerMenu />
            <section style={{backgroundColor: '#77F0D5'}} className="tw-pb-12">
            <nav className="nav">
              <LogoNav />
              <button>(Sign Up Button)</button>
            </nav>
            <div className="header">
                <h1 className='cta-1 tw-text-2xl md:tw-text-6xl' style={{color: '#8386D1'}}>
                TOP 100 MOST<br />
                DIVERSE GERMANY</h1>
                <h2 className="tw-pt-5">(animated tagline)</h2>
            </div>
            </section>
            <TrailImg />
            <SvgImg />
          
            <section style={{backgroundColor:"#5e62d1"}}>
            <SearchBar
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              color={'#67ecc8'}
              backgroundColor={"#5e62d1"}
            />
              <CompaniesList companies={companies} searchTerm={searchTerm} />
            </section>

            <section>
              <Signup user={user} setUser={setUser} />
              {!user && <Or />}
              <Login user={user} setUser={setUser} />
            </section>
      </Route>
      {/* END OF HOMEPAGE */}
       
       {/* START OF PROFILE PAGE */}
      <Route exact path='/profile'>
        <HamburgerMenu />
          <section>
            {userCompany && <SectionChartTable company={userCompany} />}
          </section>
          <Logout user={user} setUser={setUser} />
          {user && <EditProfile user={user} setUser={setUser} />}
          {user && ( <RegisterUserCompany
              userCompany={userCompany}
              setUserCompany={setUserCompany}
            />
            )}
            </Route>

      {/* END OF PROFILE PAGE */}

                {/* </Route> */}

        <Route exact path='/spinner'>
          <Spinner color={"#954e8b"} />
        </Route>
        <Route exact path='/header'>
          <HeaderIdea />
        </Route>
        <Route exact path='/components'>
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
          {user && (
            <RegisterUserCompany
              userCompany={userCompany}
              setUserCompany={setUserCompany}
            />
          )}
          {userCompany && <UserCompany userCompany={userCompany} />}
          <BannerIdea />
          {/* <Banner2 /> */}
          <div style={{backgroundColor:"#5e62d1"}}>
          <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            color={'#67ecc8'}
            backgroundColor={"#5e62d1"}
          />
            <CompaniesList companies={companies} searchTerm={searchTerm} />
          </div>
          {/* <BannerScrolling
            text={"Diversity Equals Opportunity"}
            color={"#56b39e"}
            backgroundColor={"#f7a559"}
          /> */}
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