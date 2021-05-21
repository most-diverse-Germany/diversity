import React, { useState } from 'react'
import { login } from '../services/auth'
import Button from '../components/Utilities/Button'

export default function Login(props) {
  const [message, setMessage] = useState()

  // log-in states
  const [logEmail, setLogEmail] = useState('')
  const [logPassword, setLogPassword] = useState('')

  const clearAllFields = () => {
    setMessage('')
    setLogEmail('')
    setLogPassword('')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login(logEmail, logPassword).then((response) => {
      if (response.message) {
        console.log(response)
        setMessage(response.message)
      } else {
        clearAllFields()
        props.setUser(response)
      }
    })
  }

  const style = {
    input: ' tw-border tw-p-1',
    label: ' tw-text-xs tw-text-left tw-leading-loose',
  }

  if (props.user) return <></>
  return (
    <div>
      <div id='login' className='tw-w-full  tw-px-5'>
        <h1 className=' tw-text-left'>Login</h1>
        <form className='tw-flex tw-flex-col' onSubmit={handleLogin}>
          <label className={style.label} htmlFor='email'>
            Email
          </label>
          <input
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
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
            style={{ backgroundColor: '#8386d1', borderColor: '#77F0D5' }}
            className={style.input}
            type='password'
            id='password'
            name='password'
            placeholder=''
            value={logPassword}
            onChange={(e) => setLogPassword(e.target.value)}
            backgroundColor={props.colors.backgroundColor}
            required
          />
          <Button
            type='submit'
            className={'active:tw-bg-opacity-80 tw-w-full '}
            style={{ height: '50px' }}
            text={'Login'}
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
