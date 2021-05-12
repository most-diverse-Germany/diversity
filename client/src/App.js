import React, { Component } from 'react'
import './App.css'
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
        <h1 className='tw-text-imagine'>{this.state.companies}</h1>
      </div>
    )
  }
}

export default App
