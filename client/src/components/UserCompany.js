import React from 'react'
import Chart from './Chart'
import CompanyTable from './CompanyTable'

export default function UserCompany(props) {
  return (
    <div>
      <h1>User Company</h1>
      <Chart company={props.userCompany} />
      <CompanyTable company={props.userCompany} />
    </div>
  )
}
