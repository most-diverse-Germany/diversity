import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Menu(props) {
  const animate = useSpring({
    //  opacity: isOpen ? 1 : 0
    from: {
      width: '0vw',
      marginLeft: '50vw',
      marginRight: '50vw',
      height: '100vh',
    },
    to: {
      width: '100vw',
      marginLeft: '0vw',
      marginRight: '0vw',
      height: '100vh',
    },
    // width: isOpen ? '100vw' : 0,
    config: {
      duration: 2000,
      // tension: 500,
      // mass: 3,
      // friction: 42,
      // velocity: 1,
      precision: 0.001,
      // {
      tension: 120,
      friction: 14,
      // }
    },
  })

  return (
    <animated.div
      key={1}
      style={animate}
      className='tw-w-screen tw-h-screen tw-bg-imagineRed tw-space-y-10'
    >
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        Element
      </a>
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        Element
      </a>
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        Element
      </a>
    </animated.div>
  )
}
