import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Styleguide from './components/Styleguide'

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
        <h1 className='tw-text-blue-400'>{this.state.companies}</h1>
        <Route exact path='/styleguide' component={Styleguide} />
      </div>
    )
  }
}

export default App
