import React, { Component } from 'react'
import axios from 'axios'
import Chart from './Chart.js'
import CompanyTable from './CompanyTable.js'
import ShareIcon from './ShareIcon.js'
import { colors } from '../services/color'

export default class CompanyDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: {},
      diversityScore: {},
      dataFetched: false,
      colors: [],
    }
  }

  getData = () => {
    axios
      .get(`/api/companies/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({
          company: response.data,
          dataFetched: true,
        })
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 404) {
          this.setState({
            error: 'Not found 🤷‍♀️🤷‍♂️',
          })
        }
      })
  }

  componentDidMount() {
    this.getData()
    this.setState({
      colors: colors,
    })
  }

  render() {
    if (!this.state.dataFetched || !this.state.colors)
      return <div>Loading...</div>
    if (this.state.dataFetched && this.state.colors) {
      console.log('CompanyDetails', this.state.company)
      return (
        <>
          <div>hello</div>
          <div className='tw-mt-8'>
            <h1> {this.state.company.company_name}</h1>
            <Chart company={this.state.company} colors={this.state.colors[0]} />
          </div>

          <div>
            <CompanyTable
              company={this.state.company}
              colors={this.state.colors[0]}
            />
          </div>

          <div>
            <ShareIcon company={this.state.company} />
          </div>
        </>
      )
    } else {
      return null
    }
  }
}
