import React, { useState } from 'react'
import { signup, login, logout } from '../services/auth'
import TransButton from './TransButton'

export default function Signup(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState()

  // log-in states
  const [logEmail, setLogEmail] = useState('')
  const [logPassword, setLogPassword] = useState('')

  const clearAllFields = () => {
    setMessage('')
    setFirstName('')
    setLastName('')
    setEmail('')
    setCompany('')
    setPassword('')
    setLogEmail('')
    setLogPassword('')
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

        // props.history.push('/xxx')
      }
    })
  }

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
        // props.history.push('/xxx')
      }
    })
  }

  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null)
      clearAllFields()
    })
  }

  const style = {
    input: 'tw-text-blue-600 tw-border tw-border-blue-600 tw-p-1',
    label: 'tw-text-blue-600 tw-text-xs tw-text-left tw-leading-loose',
  }

  if (props.user)
    return (
      <div id='signup' className='tw-w-full md:tw-w-4/12 tw-px-5'>
        <h1 className='tw-text-blue-600 tw-text-left'>
          Hi, {props.user.firstName}!{' '}
        </h1>
        <div className='tw-flex tw-flex-col'>
          <button
            class='tw-bg-yellow-500 tw-text-blue-600 tw-py-5 tw-mt-5 md:tw-w-1/2'
            onClick={() => handleLogout()}
          >
            Logout
          </button>

          {message && <h3>{message}</h3>}
        </div>
      </div>
    )

  return (
    <>
      <TransButton
        text={'Button'}
        size={'tw-w-4/12 tw-h-12'}
        backgroundColor={'#f59e0b'}
        fillColor={'#2563eb'}
        // textColor={'#272727'}
        textColor={'white'}
      />

      {/* {props.user ? (
        <h1 className='tw-text-blue-600 tw-text-left'>
          Hi, {props.user.firstName}!
        </h1>
      ) : (
        <h1 className='tw-text-blue-600 tw-text-left'>Signup</h1>
      )} */}
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

          {/* {message && <h3>{message}</h3>} */}
        </form>
      </div>

      <div
        id='or'
        className='tw-italic tw-text-4xl tw-py-10 tw-w-full md:tw-w-4/12 tw-px-5 tw-text-blue-600 tw-text-left'
      >
        Or
      </div>
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
    </>
  )
}

// https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/animating-auto?file=/src/styles.module.css:0-533
// import React, { useState } from 'react'
// import useMeasure from 'react-use-measure'
// import { useSpring, animated } from '@react-spring/web'

// import styles from './styles.module.css'

// export default function App() {
//   const [open, toggle] = useState(false)
//   const [ref, { width }] = useMeasure()
//   const props = useSpring({ width: open ? width : 0 })

//   return (
//     <div className={styles.container}>
//       <div ref={ref} className={styles.main} onMouseOver={() => toggle(!open)}>
//         <animated.div className={styles.fill} style={props} />
//         <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
//       </div>
//     </div>
//   )
// }
