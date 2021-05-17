import React, { Component } from 'react'
import CompanyRow from './CompanyRow'
import { Link } from 'react-router-dom';


export class CompaniesList extends Component {

  state = {
    displayAll: true,
    companies: []
  }

  getTop100 = () => {
    //THIS IS THE LOGIC TO CALCULATE THE TOP 100
    const top100 = this.props.companies.sort((a, b) => {
      let aAvg = (a.diversity_total + a.growth_score + a.opportunity_score) / 3;
      let bAvg = (b.diversity_total + b.growth_score + b.opportunity_score) / 3;
      if (aAvg > bAvg) {
        return -1;
      }
      if (aAvg < bAvg) {
        return 1;
      }
      return 0;      
    }).splice(0, 10);
    return top100;
  }

  componentDidMount() {
    console.log('cdm');    
    this.setState({
      companies: this.getTop100()
    })
  }

  clickHandler = () => {
    console.log('click')
    this.setState((state) => ({
      displayAll: !this.state.displayAll
    }))
  }

  render() {
    
    console.log(this.getTop100());
    console.log(this.state.companies);
    

    if (this.state.companies.length === 0) return <h3>Loading...</h3>
    
    return (
      
      <div >
         
        {this.state.companies.map((company) => (
          <Link to={`/company/${company._id}`}>
            <CompanyRow company={company} />
          </Link>
        ))}

        {this.state.displayAll === false &&
          <button onClick={this.clickHandler} className="tw-text-imagineText">see more</button>}
        
        {this.state.displayAll === true &&
          <button onClick={this.clickHandler} className="tw-text-imagineText">see less</button>}
        
      </div>
    )
  }
}

export default CompaniesList
