import React, { useState } from 'react'
import { signup } from '../services/auth'
import Button from '../components/Utilities/Button'

export default function Signup(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState()

  const clearAllFields = () => {
    setMessage('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setCompany('')
    setPassword('')
  }

  const handleSignup = (e) => {
    e.preventDefault()
    signup(email, firstName, lastName, company, password).then((response) => {
      if (response.message) {
        setMessage(response.message)
      } else {
        clearAllFields()
        // we now put the user in the state of App.js
        props.setUser(response)

        // props.history.push('/xxx')
      }
    })
  }

  const style = {
    input: ' tw-border tw-border-blue-600 tw-p-1',
    label: ' tw-text-xs tw-text-left tw-leading-loose',
  }

  if (props.user) return <></>
  return (
    <div>
      <div id='signup' className=' tw-w-full tw-px-5'>
        <h1 className=' tw-text-left'>Signup</h1>
        <form className='tw-flex tw-flex-col' onSubmit={handleSignup}>
          <label className={style.label} htmlFor='firstName'>
            First Name
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='text'
            name='firstName'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label className={style.label} htmlFor='firstName'>
            Last Name
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label className={style.label} htmlFor='email'>
            Email
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className={style.label} htmlFor='company'>
            Company
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='text'
            name='company'
            id='company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <label className={style.label} htmlFor='firstName'>
            Password
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='password'
            id='password'
            name='password'
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <button className=' tw-py-5 tw-mt-5 md:tw-w-1/2' type='submit'>
            Sign Up
          </button> */}
          <Button
            type='submit'
            className={'active:tw-bg-opacity-80 tw-w-full '}
            style={{ height: '50px' }}
            text={'Signup'}
            color={'white'}
            backgroundColor={'#77F0D5'}
            fillColor={'#E0E2EE'} //
            // symbol={<ArrowRight />}
            // onClick={this.clickHandler}
          />
          {message && <h3>{message}</h3>}
        </form>
      </div>
    </div>
  )
}
