import React, { useState, useEffect } from 'react'
import { getTop100Companies } from '../services/companies'

export default function Compare(props) {
  const [avgScore, setAvgScore] = useState()
  const [rank, setRank] = useState()
  const [sendButton, setSendButton] = useState(false)
  const [message, setMessage] = useState('')

  const getRank = (avgScore, companiesList) => {
    return companiesList.reduce((acc, curr) => {
      const currAvgScore =
        Math.floor(
          ((curr.diversity_total + curr.growth_score + curr.opportunity_score) /
            3) *
            100
        ) / 100
      return acc + (currAvgScore > avgScore ? 1 : 0)
    }, 0)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setSendButton(true)
  }

  useEffect(() => {
    // console.log('hello')
    getTop100Companies().then((companies) => {
      //   console.log({ companies })
      const score =
        Math.floor(
          ((props.company.diversity_total +
            props.company.growth_score +
            props.company.opportunity_score) /
            3) *
            100
        ) / 100
      setAvgScore(score)
      if (companies) setRank(getRank(score, companies))
    })
  }, [props.company])

  const companyName =
    props.company.company_name.charAt(0).toUpperCase() +
    props.company.company_name.slice(1)

  if (rank == 100)
    return (
      <div id='notTop100' className=' tw-pb-10'>
        <div className='tw-text-xl tw-text-blue-600 tw-text-left'>
          {companyName} has a lot of room for growth. Get in contact with one of
          our Coaches today!
        </div>
        <form className='tw-flex tw-flex-col' onSubmit={submitHandler}>
          <button
            className='tw-bg-yellow-500 tw-text-blue-600 tw-py-5 tw-mt-5 md:tw-w-1/2  focus:tw-text-yellow-500 focus:tw-bg-blue-600 '
            type='submit'
          >
            {sendButton ? 'Request Sent' : 'Request an Appointment!'}
          </button>
          {sendButton && (
            <div className='tw-text-xl tw-text-blue-600 tw-text-left tw-py-5'>
              A coach from Imagine Foundation will get in touch with you
              shortly!
            </div>
          )}
          {message && (
            <div className='tw-text-xs font-bold tw-pt-3'>{message}</div>
          )}
        </form>
      </div>
    )

  return (
    <div id='top100' className='tw-pb-10'>
      <div className='tw-text-xl tw-text-blue-600 tw-text-left'>
        {/* Compare {avgScore} your rank is {rank} */}
        {companyName} is part of the 100 Most diverse and growing companies in
        Germany. <br />
        <span className='tw-underline'>
          Share your good work with your community!
        </span>
      </div>
    </div>
    // SOCIAL SHARE COMPONENT HERE
  )
}
