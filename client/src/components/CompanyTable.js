// use this for setting interval https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks

import React from 'react'

export default function CompanyTable(props) {
  return (
    <>
      <div className='tw-flex tw-items-center tw-justify-center tw-border-current'>
        <div className='tw-container tw-overflow-auto'>
          <table className='tw-relative tw-w-full'>
            <tbody className='tw-divide-y tw-divide-indigo-400'>
              <tr className='hover:tw-bg-gray-100 hover:tw-bg-opacity-30'>
                <td className='tw-uppercase  tw-py-4 tw-text-left'>
                  Company Name
                </td>
                <td className='tw-uppercase  tw-py-4 tw-text-right'>
                  {props.company.company_name}
                </td>
              </tr>
              <tr className='hover:tw-bg-gray-100 hover:tw-bg-opacity-30'>
                <td className='tw-uppercase  tw-py-4 tw-text-left'>
                  Employees
                </td>
                <td className='tw-uppercase  tw-py-4 tw-text-right'>
                  {props.company.number_employees}
                </td>
              </tr>
              <tr className='hover:tw-bg-gray-100 hover:tw-bg-opacity-30'>
                <td className='tw-uppercase  tw-py-4 tw-text-left'>Linkedin</td>
                <td className='tw-uppercase  tw-py-4 tw-text-right'>
                  {' '}
                  <a href={props.company.url_linkedIn}>Click here</a>
                </td>
              </tr>
              <tr className='hover:tw-bg-gray-100 hover:tw-bg-opacity-30'>
                <td className=' tw-py-4 tw-text-left'>Diversity Score</td>
                <td className='tw-uppercase  tw-py-4 tw-text-right'>
                  {' '}
                  {props.company.diversity_total}
                </td>
              </tr>
              <tr className='hover:tw-bg-gray-100 hover:tw-bg-opacity-30'>
                <td className='tw-uppercase  tw-py-4 tw-text-left'>
                  Opportunity Score
                </td>
                <td className='tw-uppercase  tw-py-4 tw-text-right'>
                  {' '}
                  {props.company.opportunity_score}
                </td>
              </tr>
              <tr className='hover:tw-bg-gray-100 hover:tw-bg-opacity-30'>
                <td className='tw-uppercase  tw-py-4 tw-text-left'>
                  Growth Score
                </td>
                <td className='tw-uppercase  tw-py-4 tw-text-right'>
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
