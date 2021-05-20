import React, { useState, useEffect } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import './styles.module.css'
//import { debounce } from './helper';
import { useSpring, animated } from 'react-spring'
import Menu from './Menu'

export default function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const handleToggle = function (toggled) {
    setOpen(toggled)
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 20) ||
        currentScrollPos < 10
    )
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const navbarStyles = {
    position: 'fixed',
    // height: isHover ? '54px' : '50px',
    // width: isHover ? '54px' : '50px',
    height: '50px',
    width: '50px',
    transition: 'top 0.7s',
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: '50px',
    // borderRadius: isHover ? '54px' : '50px',
  }

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  const toggleHover = () => {
    setIsHover(true)
    console.log('HOVERED')
  }

  return (
    <div>
      <div
        id='hamburger-button'
        style={{
          ...navbarStyles,
          zIndex: 300,
          position: 'absolute',
          borderWidth: '20px',
          // left: isHover ? `calc(50vw - 29px)` : `calc(50vw - 25px)`,
          left: `calc(50vw - 25px)`,
          // top: isHover ? '100px' : '50px',
          // top: visible ? '3vh' : '-60px',
          top: '3vh',
          // top: visible ? (isHover ? `calc(3vh-4px)` : `3vh`) : '-60px',
        }}
      >
        {/* <button onClick={toggleMenu}> */}
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={toggleMenu}
        >
          <Hamburger
            rounded
            color='#FCE7CC'
            toggled={isOpen}
            size={35}
            distance='md'
            toggle={setOpen}
            duration={1}
            onToggle={handleToggle}
          />
        </button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ></div>
      </div>
      <div
        id='menu'
        style={{ zIindex: 200, position: 'absolute' }}
        className={isOpen ? 'tw-block' : 'tw-hidden'}
      >
        <Menu props={props} />
      </div>
    </div>
  )
}
