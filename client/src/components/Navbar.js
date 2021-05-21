import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='register-login-link tw-flex tw-flex-row tw-pt-2 tw-float-right tw-pr-5 tw-space-x-2'>
          <div className='hover:tw-underline'>Register</div>
          <div>/</div>
          <div className='hover:tw-underline'>Login</div>
        </div>
      </>
    )
  }
}
