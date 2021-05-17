import React from 'react'
import Chart from './Chart'
import CompanyTable from './CompanyTable'
import Compare from './Compare'

export default function UserCompany(props) {
  return (
    <div id='userCompany' className='tw-w-full md:tw-w-4/12 tw-px-5'>
      {/* <h1>User Company</h1> */}
      <Compare company={props.userCompany} />
      <Chart company={props.userCompany} />
      <CompanyTable company={props.userCompany} />
    </div>
  )
}
