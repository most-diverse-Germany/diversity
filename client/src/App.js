import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Styleguide from './components/Styleguide'
import CompaniesList from './components/CompaniesList'

const axios = require('axios')

class App extends Component {
  state = {
    companies: [],
  }

  componentDidMount() {
    axios
      .get('/api/companies')
      .then((response) => {
        console.log(response);
        
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
        <CompaniesList companies={this.state.companies} />
        <Route exact path='/styleguide' component={Styleguide} />
        <Route exact path='/companiestest' component={CompaniesList} />
      </div>
    )
  }
}

export default App
