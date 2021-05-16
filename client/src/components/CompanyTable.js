import React from 'react'

export default function CompanyTable(props) {
  return (
    <>
      <div className='tw-flex tw-items-center tw-justify-center'>
        <div className='tw-container tw-max-w-sm'>
          <table className='tw-relative tw-w-full tw-border'>
            <tbody className='tw-divide-y tw-bg-pink-200'>
              <tr>
                <td className='tw-px-6 tw-py-4 tw-text-center'>Company Name</td>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  {props.company.company_name}
                </td>
              </tr>
              <tr>
                <td className='tw-px-6 tw-py-4 tw-text-center'>Employees</td>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  {props.company.number_employees}
                </td>
              </tr>
              <tr>
                <td className='tw-px-6 tw-py-4 tw-text-center'>Link</td>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  {' '}
                  <a href={props.company.url_linkedin}>LinkedIn-Link</a>
                </td>
              </tr>
              <tr>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  Diversity Score
                </td>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  {' '}
                  {props.company.diversity_total}
                </td>
              </tr>
              <tr>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  Opportunity Score
                </td>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  {' '}
                  {props.company.opportunity_score}
                </td>
              </tr>
              <tr>
                <td className='tw-px-6 tw-py-4 tw-text-center'>Growth Score</td>
                <td className='tw-px-6 tw-py-4 tw-text-center'>
                  {props.company.growth_score}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
