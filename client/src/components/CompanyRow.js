import React from 'react'

export default function CompanyRow(props) {
  return (
    <>
      {/* MAKE SURE TO USE THE KEY IN THE UPPER WRAPPING ELEMENT likely a div but not in the Fragment */}
      <h1 key={props.company._id}>{props.company.company_name}</h1>
    </>
  )
}
