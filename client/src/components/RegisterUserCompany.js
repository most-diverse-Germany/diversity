import React, { useState, useEffect } from 'react'
import {
  getAllUserCompanies,
  getUserCompaniesFromUser,
  getUserCompany,
  updateUserCompany,
  createUserCompany,
  deleteCompany,
} from '../services/userCompanies'

// userCompanyId,
// company_name,
// url_linkedin,
// diversity_total,
// growth_score,
// opportunity_score

export default function RegisterUserCompany(props) {
  //   const [userCompanyId, setUserCompanyId] = useState()
  //   const [companyName, setCompanyName] = useState()
  const [urlLinkedin, setUrlLinkedin] = useState()
  //   const [diversityScore, setDiversityScore] = useState()
  //   const [growthScore, setGrowthScore] = useState()
  //   const [opportunityScore, setOpportunityScore] = useState()
  const [message, setMessage] = useState()

  //   const clearAllFields = () => {
  //     setCompanyName('')
  //     setUrlLinkedin('')
  //     setDiversityScore('')
  //     setGrowthScore('')
  //     setOpportunityScore('')
  //     setMessage('')
  //   }

  // userCompanyId,
  // company_name,
  // url_linkedin,
  // diversity_total,
  // growth_score,
  // opportunity_score

  const handleRegister = (e) => {
    e.preventDefault()
    createUserCompany(urlLinkedin).then((response) => {
      if (response.error) {
        setMessage(response.error)
        setUrlLinkedin('')
      } else {
        console.log(response)
        props.setUserCompany(response)
        setMessage('We calculated your Scores!')
        setUrlLinkedin('')
        // const {
        //   _id,
        //   company_name,
        //   url_linkedin,
        //   diversity_total,
        //   growth_score,
        //   opportunity_score,
        // } = response.data
        // setUserCompanyId(_id)
        // setCompanyName(company_name)
        // setUrlLinkedin(url_linkedin)
        // setDiversityScore(diversity_total)
        // setGrowthScore(growth_score)
        // setOpportunityScore(opportunity_score)
      }
    })
  }

  const style = {
    input: 'tw-text-blue-600 tw-border tw-border-blue-600 tw-p-1',
    label: 'tw-text-blue-600 tw-text-xs tw-text-left tw-leading-loose',
  }

  //   company_name,
  //   url_linkedin,
  //   diversity_total,
  //   growth_score,
  //   opportunity_score,

  if (props.user) return <></>
  return (
    <div>
      <div
        id='userCompanyRegistration'
        className='tw-w-full md:tw-w-4/12 tw-px-5'
      >
        <h1 className='tw-text-blue-600 tw-text-left'>Register</h1>
        <h3>register and compare your company</h3>
        <form className='tw-flex tw-flex-col' onSubmit={handleRegister}>
          <label className={style.label} htmlFor='company_name'>
            LinkedIn Url
          </label>
          <input
            className={style.input}
            type='text'
            name='url_linkedin'
            id='url_linkedin'
            value={urlLinkedin}
            onChange={(e) => setUrlLinkedin(e.target.value)}
            placeholder='https://www.linkedin.com/company/name/'
            required
          />
          <button
            className='tw-bg-yellow-500 tw-text-blue-600 tw-py-5 tw-mt-5 md:tw-w-1/2'
            type='submit'
          >
            Submit & Compare
          </button>
          {message && <h3>{message}</h3>}
        </form>
      </div>
    </div>
  )
}
