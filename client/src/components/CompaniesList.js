import React, { Component } from 'react';
import CompanyRow from './CompanyRow';


export class CompaniesList extends Component {
  render() {
    
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
      }).splice(0,100);

    console.log(top100);
    
    return (
      <>
        <div>
        {top100.map((company) => (
          <CompanyRow company={company} />
        ))}
        </div>  
      </>
    )
  }
}

export default CompaniesList
