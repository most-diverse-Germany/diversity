import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart.js';
import CompanyTable from './CompanyTable.js';
import ShareIcon from './ShareIcon.js';


export default class CompanyDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: {},
      diversityScore: {},
      dataFetched: false,
    }
  }

  getData = () => {
    axios
      .get(`/api/companies/${this.props.match.params.id}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          company: response.data,
          dataFetched: true,
          // this unsets the flag when the data is available
          // dataRequested: false
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
  }

  render() {
    if (this.state.dataFetched) {
      console.log('CompanyDetails', this.state.company)
      return (
        <>
          <div className='tw-mt-8'>
            <h1> {this.state.company.company_name}</h1>
            <Chart company={this.state.company} />
          </div>

          <div>
            <CompanyTable company={this.state.company} />
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
