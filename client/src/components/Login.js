import React, { useState } from 'react'
import { login } from '../services/auth'

export default function Login(props) {
  //   const [firstName, setFirstName] = useState('')
  //   const [lastName, setLastName] = useState('')
  //   const [email, setEmail] = useState('')
  //   const [company, setCompany] = useState('')
  //   const [password, setPassword] = useState('')
  const [message, setMessage] = useState()

  // log-in states
  const [logEmail, setLogEmail] = useState('')
  const [logPassword, setLogPassword] = useState('')

  const clearAllFields = () => {
    setMessage('')
    // setFirstName('')
    // setLastName('')
    // setEmail('')
    // setCompany('')
    // setPassword('')
    setLogEmail('')
    setLogPassword('')
  }

  //   const handleSignup = (e) => {
  //     e.preventDefault()
  //     signup(email, firstName, lastName, company, password).then((response) => {
  //       if (response.message) {
  //         console.log(response)
  //         setMessage(response.message)
  //       } else {
  //         clearAllFields()
  //         // we now put the user in the state of App.js
  //         props.setUser(response)

  //         // props.history.push('/xxx')
  //       }
  //     })
  //   }

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(email)
    login(logEmail, logPassword).then((response) => {
      if (response.message) {
        console.log(response)
        setMessage(response.message)
      } else {
        clearAllFields()
        // we now put the user in the state of App.js
        props.setUser(response)
        // props.history.push('/')
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
      <div id='login' className='tw-w-full md:tw-w-4/12 tw-px-5'>
        <h1 className='tw-text-blue-600 tw-text-left'>Login</h1>
        <form className='tw-flex tw-flex-col' onSubmit={handleLogin}>
          <label className={style.label} htmlFor='email'>
            Email
          </label>
          <input
            className={style.input}
            type='text'
            name='email'
            id='email'
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
            required
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
            value={logPassword}
            onChange={(e) => setLogPassword(e.target.value)}
            required
          />
          <button
            className='tw-bg-yellow-500 tw-text-blue-600 tw-py-5 tw-mt-5 md:tw-w-1/2'
            type='submit'
          >
            Login
          </button>

          {message && <h3>{message}</h3>}
        </form>
      </div>
    </div>
  )
}
