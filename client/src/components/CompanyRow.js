import React from 'react'

export default function CompanyRow(props) {
  
  const overallScore = ((props.company.diversity_total + props.company.growth_score + props.company.opportunity_score)/3)

  return (
    <>
      {/* MAKE SURE TO USE THE KEY IN THE UPPER WRAPPING ELEMENT likely a div but not in the Fragment */}
      <h1 key={props.company._id}>{props.company.company_name}</h1>
      
      <h3>Diversity Score: {props.company.diversity_total}</h3>
      <h3>Growth Score: {props.company.growth_score}</h3>
      <h3>Opportunity Score: {props.company.opportunity_score}</h3>
      <h2>Overall Score: {overallScore.toFixed(2)}</h2>
    </>
    
  )
}
