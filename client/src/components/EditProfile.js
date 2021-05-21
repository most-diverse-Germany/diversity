import React, { useState, useEffect } from 'react'
import Button from '../components/Utilities/Button'
import { update } from '../services/users'

export default function Editprofile(props) {
  const [firstName, setFirstName] = useState(() => {
    return props ? props.user.firstName : ''
  })
  const [lastName, setLastName] = useState(() => {
    return props ? props.user.lastName : ''
  })
  const [email, setEmail] = useState(() => {
    return props ? props.user.email : ''
  })
  const [company, setCompany] = useState(() => {
    return props ? props.user.company : ''
  })
  const [password, setPassword] = useState(() => {
    return props ? props.user.password : ''
  })

  const [message, setMessage] = useState()

  useEffect(() => {
    console.log(password)
    setFirstName(props.user.firstName)
    setLastName(props.user.lastName)
    setEmail(props.user.email)
    setCompany(props.user.company)
    // setId(props.user._id)
  }, [props])

  const clearAllFields = () => {
    setMessage('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setCompany('')
    setPassword('')
  }

  const handleEdit = (e) => {
    e.preventDefault()
    update(props.user._id, email, firstName, lastName, company, password).then(
      (response) => {
        if (response.message) {
          setMessage(response.message)
        } else {
          setPassword('')
          props.setUser(response)
        }
      }
    )
  }

  const style = {
    input: ' tw-border  tw-p-1',
    label: ' tw-text-xs tw-text-left tw-leading-loose',
  }

  return (
    <>
      <div id='editProfile' className='tw-w-full tw-px-5'>
        <h1 className=' tw-text-left'>Edit your profile</h1>
        <form className='tw-flex tw-flex-col' onSubmit={handleEdit}>
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

          <Button
            type='submit'
            className={'active:tw-bg-opacity-80 tw-w-full '}
            style={{ height: '50px' }}
            text={'Save Edit'}
            color={'white'}
            backgroundColor={'#77F0D5'}
            fillColor={'#E0E2EE'} //
            // symbol={<ArrowRight />}
            // onClick={this.clickHandler}
          />
          {message && <h3>{message}</h3>}
        </form>
      </div>
    </>
  )
}
