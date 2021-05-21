import React, { Component } from 'react'
import axios from 'axios'
import Chart from './Chart.js'
import CompanyTable from './CompanyTable.js'
import ShareIcon from './ShareIcon.js'
import { colors } from '../services/color'
import BannerScrolling from './BannerScrolling'

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
        this.setState({
          company: response.data,
          dataFetched: true,
        })
      })
      .catch((err) => {
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
      return (
        <div
          class='company-details tw-pt-20'
          style={{ backgroundColor: colors[0].backgroundColor }}
        >
          <div className=''>
            <h1 className='tw-py-8 tw-uppercase'>
              {' '}
              {this.state.company.company_name}
            </h1>
            <Chart company={this.state.company} colors={colors[0]} />
          </div>

          <div>
            <CompanyTable company={this.state.company} colors={colors[0]} />
          </div>
          <div>
            <ShareIcon company={this.state.company} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
