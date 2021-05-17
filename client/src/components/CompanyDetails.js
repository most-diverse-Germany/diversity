import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart.js';
import CompanyTable from './CompanyTable.js';
import { LinkedinShareButton, WhatsappShareButton, TwitterShareButton} from 'react-share';
import { LinkedinIcon, WhatsappIcon, TwitterIcon } from 'react-share';

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

        

          <div className='tw-flex tw-justify-center'>
          <div className='tw-mx-4'>
            <LinkedinShareButton
              url = {
              `https://most-diverse-100.herokuapp.com/companies/${this.state.company._id}`
              } 
               title = { `${this.state.company.company_name} is part of the most diverse 100 companies ranking of imagine foundation`}
              >
              <LinkedinIcon size={35} round={true} />
              </LinkedinShareButton>
              </div>

              <div className='tw-mx-4'>
              <WhatsappShareButton
              url = {       
                `https://most-diverse-100.herokuapp.com/companies/${this.state.company._id}`
              } 
               title = { `${this.state.company.company_name} is part of the most diverse 100 companies ranking of imagine foundation`}
              >
              <WhatsappIcon size={35} round={true} />
              </WhatsappShareButton>
              </div>
              
              <div className='tw-mx-4'>
              <TwitterShareButton
              url = {
                `https://most-diverse-100.herokuapp.com/companies/${this.state.company._id}`
              } 
               title = {`${this.state.company.company_name} is part of the most diverse 100 companies ranking of imagine foundation`}
              >
              <TwitterIcon size={35} round={true} />
              </TwitterShareButton>
              </div>

          </div>
        </>
      )
    } else {
      return null
    }
  }
}
