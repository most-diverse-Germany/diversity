import React, { useState, useEffect } from 'react'
import Button from '../components/Utilities/Button'

import {
  getAllUserCompanies,
  getUserCompaniesFromUser,
  getUserCompany,
  updateUserCompany,
  createUserCompany,
  deleteCompany,
} from '../services/userCompanies'

export default function RegisterUserCompany(props) {
  const [urlLinkedin, setUrlLinkedin] = useState()

  const [message, setMessage] = useState()

  const handleRegister = (e) => {
    e.preventDefault()
    if (props.userCompany) {
      updateUserCompany(props.userCompany._id, urlLinkedin)
        .then((response) => {
          props.setUserCompany(response)
          setMessage('We calculated your Score!')
          setUrlLinkedin('')
        })
        .catch((err) => setMessage(err))
    } else {
      createUserCompany(urlLinkedin)
        .then((response) => {
          props.setUserCompany(response)
          setMessage('We calculated your Score!')
          setUrlLinkedin('')
        })
        .catch((err) => setMessage(err))
    }
  }

  const style = {
    input: ' tw-border tw-border-blue-600 tw-p-1',
    label: ' tw-text-xs tw-text-left tw-leading-loose',
  }

  if (props.user) return <></>
  return (
    <div>
      <div id='userCompanyRegistration' className='tw-w-full tw-px-5 tw-pb-10'>
        <h1 className=' tw-text-left'>Register</h1>
        <h3 className=' tw-text-left tw-pb-3'>
          Register and compare your company
        </h3>
        <form className='tw-flex tw-flex-col' onSubmit={handleRegister}>
          <label className={style.label} htmlFor='company_name'>
            LinkedIn Url
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='text'
            name='url_linkedin'
            id='url_linkedin'
            value={urlLinkedin}
            onChange={(e) => setUrlLinkedin(e.target.value)}
            placeholder='https://www.linkedin.com/company/name/'
            required
          />
          <Button
            type='submit'
            className={'active:tw-bg-opacity-80 tw-w-full '}
            style={{ height: '50px' }}
            text={'Calculate'}
            color={'white'}
            backgroundColor={'#77F0D5'}
            fillColor={'#E0E2EE'} //
            // symbol={<ArrowRight />}
            // onClick={this.clickHandler}
          />
          {message && (
            <div className='tw-text-left tw-text-xs font-bold tw-pt-3'>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
