import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Styleguide from './components/Styleguide'
import CompaniesList from './components/CompaniesList'
import Chart from './components/Chart'
import CompanyDetails from './components/CompanyDetails'
const axios = require('axios')

class App extends Component {
  state = {
    companies: [],
  }
  componentDidMount() {
    axios
      .get('/api/companies')
      .then((response) => {
        this.setState({
          companies: response.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <CompaniesList companies={this.state.companies} />
          </Route>
          <Route exact path='/styleguide'>
            <Styleguide />
          </Route>
          <Route exact path='/chart'>
            <Chart />
          </Route>
          {/* <Route exact path='/companies/:id'>
          <CompanyDetails />
          </Route>           */}
          <Route exact path="/companies/:id" component={CompanyDetails} />
        </Switch>
      </div>
    )
  }
}
export default App