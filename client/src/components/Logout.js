import React from 'react'
import { logout } from '../services/auth'
import Button from '../components/Utilities/Button'

export default function Logout(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null)
    })
  }

  if (!props.user) return <></>
  return (
    <div id='signup' className='tw-w-full md:tw-w-4/12 tw-px-5'>
      <h1 className=' tw-text-left'>Hi, {props.user.firstName}!</h1>
      <div className='tw-flex tw-flex-col'>
        <Button
          type='submit'
          className={'active:tw-bg-opacity-80 tw-w-full '}
          style={{ height: '50px' }}
          text={'Logout'}
          color={'white'}
          backgroundColor={'#77F0D5'}
          fillColor={'#E0E2EE'} //
          // symbol={<ArrowRight />}
          onClick={() => handleLogout()}
        />
      </div>
    </div>
  )
}
