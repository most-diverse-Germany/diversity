import React from 'react'

export default function CompanyTable(props) {
  return (
    <>
<div className="tw-flex tw-items-center tw-justify-center">
    <div className="tw-container tw-max-w-sm tw-overflow-auto">
      <table className="tw-relative tw-w-full"> 
    
      <tbody className="tw-divide-y">
    <tr className="hover:tw-bg-red-50"> 
			<td className="tw-px-6 tw-py-4 tw-text-left tw-font-bold">Company Name</td>
      <td className="tw-px-6 tw-py-4 tw-text-left">{props.company.company_name}</td>
    </tr>
    <tr className="hover:tw-bg-red-50"> 
			<td className="tw-px-6 tw-py-4 tw-text-left tw-font-bold">Employees</td>
      <td className="tw-px-6 tw-py-4 tw-text-left">{props.company.number_employees}</td>
    </tr>
    <tr className="hover:tw-bg-red-50"> 
			<td className="tw-px-6 tw-py-4 tw-text-left tw-font-bold">Link</td>
      <td className="tw-px-6 tw-py-4 tw-text-left"> <a href={props.company.url_linkedIn}>LinkedIn-Link</a></td>
    </tr>
    <tr className="hover:tw-bg-red-50"> 
			<td className="tw-px-6 tw-py-4 tw-text-left tw-font-bold">Diversity Score</td>
      <td className="tw-px-6 tw-py-4 tw-text-left"> {props.company.diversity_total}</td>
    </tr>
    <tr className="hover:tw-bg-red-50"> 
			<td className="tw-px-6 tw-py-4 tw-text-left tw-font-bold">Opportunity Score</td>
      <td className="tw-px-6 tw-py-4 tw-text-left"> {props.company.opportunity_score}</td>
    </tr>
    <tr className="hover:tw-bg-red-50"> 
			<td className="tw-px-6 tw-py-4 tw-text-left tw-font-bold">Growth Score</td>
      <td className="tw-px-6 tw-py-4 tw-text-left">{props.company.growth_score}</td>
    </tr>
  
    </tbody>
  </table>

</div>
  </div>
 
</>
  )
}
