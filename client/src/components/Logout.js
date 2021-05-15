import React from 'react'
import { logout } from '../services/auth'

export default function Logout(props) {
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null)
    })
  }

  if (!props.user) return <></>
  return (
    <div id='signup' className='tw-w-full md:tw-w-4/12 tw-px-5'>
      <h1 className='tw-text-blue-600 tw-text-left'>
        Hi, {props.user.firstName}!
      </h1>
      <div className='tw-flex tw-flex-col'>
        <button
          class='tw-bg-yellow-500 tw-text-blue-600 tw-py-5 tw-mt-5 md:tw-w-1/2'
          onClick={() => handleLogout()}
        >
          Logout
        </button>

        {/* {message && <h3>{message}</h3>} */}
      </div>
    </div>
  )
}
