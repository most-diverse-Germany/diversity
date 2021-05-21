import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { colors } from '../services/color'

export default function Menu(props) {
  const [currColor, setCurrColor] = useState()

  const animate = useSpring({
    //  opacity: isOpen ? 1 : 0
    from: {
      // width: '100vw',
      // marginLeft: '50vw',
      // marginRight: '50vw',
      // height: '100vh',
      scaleX: 0,
      // transform: 'scaleX(0)',
    },
    to: {
      // width: '100vw',
      // marginLeft: '0vw',
      // marginRight: '0vw',
      // height: '100vh',
      scaleX: 1,
      // transform: 'scaleX(1)',
    },
    // width: isOpen ? '100vw' : 0,
    config: {
      duration: 2000,
      mass: 4.9,
      tension: 323,
      friction: 61,
      precision: 0.406,
      velocity: 3,
    },
  })

  useEffect(() => {
    setCurrColor(colors[1])
  })

  if (!currColor) return <div>Loading...</div>
  return (
    <animated.div
      key={Math.floor(Math.random() * 1000)}
      style={{
        ...animate,
        transformOrigin: 'top',
        backgroundColor: currColor.backgroundColor,
        color: currColor.color,
        zIndex: '10',
        position: 'relative',
      }}
      className='tw-pt-20 md:tw-pt-40 tw-w-screen tw-h-screen tw-space-y-10'
    >
      <a href='/' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        Home
      </a>
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        Mission
      </a>
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        Your Company
      </a>
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        F.A.Q.
      </a>
      <a href='#' className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>
        About
      </a>
    </animated.div>
  )
}
