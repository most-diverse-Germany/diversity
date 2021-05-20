import React, { Component } from 'react'
import CompanyRow from './CompanyRow'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';


export class CompaniesList extends Component {

  state = {
    displayAll: false,
  }

  clickHandler = () => {
    this.setState((state) => ({
      displayAll: !this.state.displayAll
    }))
  }

  render() {

    if (!this.props.companies && !this.props.companies.length) return (<Spinner />)
     
    return (
      <div style={{ minHeight: '500px', backgroundColor: '#5e62d1', marginTop: 0 }}>

      {this.props.companies.map(company => company).splice(0, this.state.displayAll ? 100 : 10)        
      .filter(company => {
      return company.company_name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        }).map((company) => (
          <Link to={`/companies/${company._id}`}>
            <CompanyRow company={company}
              text={'white'}
              color={'#67ecc8'}
              backgroundColor={'#5e62d1'}
              listColor={'#e0e2ee'}
            />
          </Link>
        ))}
        
        {this.state.displayAll === false && this.props.searchTerm === '' &&
          <button onClick={this.clickHandler} style={{color: '#67ecc8', paddingBottom: '20px'}} className="tw-text-imagineText">show all 100</button>}
        
        {this.state.displayAll === true && this.props.searchTerm === '' &&
          <button onClick={this.clickHandler} style={{color: '#67ecc8', paddingBottom: '20px'}}  className="tw-text-imagineText">show less</button>}
        
      </div>
    )
  }
}

export default CompaniesList