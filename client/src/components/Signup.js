import React, { useState } from 'react'
import { signup } from '../services/auth'
import { useHistory } from 'react-router-dom';

export default function Signup(props) {
  const history = useHistory()
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
        console.log(response)
        setMessage(response.message)
      } else {
        clearAllFields()
        // we now put the user in the state of App.js
        props.setUser(response)
        history.push('/profile')
      }
    })
  }

  const style = {
    input: 'tw-text-blue-600 tw-border tw-border-blue-600 tw-p-1',
    label: 'tw-text-blue-600 tw-text-xs tw-text-left tw-leading-loose',
  }

  if (props.user) return <></>
  return (
    <div>
      <div id='signup' className='tw-w-full md:tw-w-4/12 tw-px-5'>
        <h1 className='tw-text-blue-600 tw-text-left'>Signup</h1>
        <form className='tw-flex tw-flex-col' onSubmit={handleSignup}>
          <label className={style.label} htmlFor='firstName'>
            First Name
          </label>
          <input
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
            className={style.input}
            type='password'
            id='password'
            name='password'
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className='tw-bg-yellow-500 tw-text-blue-600 tw-py-5 tw-mt-5 md:tw-w-1/2'
            type='submit'
          >
            Sign Up
          </button>
          {message && <h3>{message}</h3>}
        </form>
      </div>
    </div>
  )
}
