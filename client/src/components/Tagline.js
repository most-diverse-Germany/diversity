import React from 'react'
import { useSpring, animated } from 'react-spring'
import mainImg from '../assets/lady-bg-pink.png'
import './Tagline.css'

export default function Tagline() {
  const animate = useSpring({
    from: {
      // width: '0vw',
      // scaleX: 1,
    },
    to: {
      // scaleX: 1,
      // width: '50vw',
    },
    config: {
      duration: 2000,
      mass: 4.9,
      tension: 323,
      friction: 61,
      precision: 0.406,
      velocity: 3,
    },
  })

  return (
    <div>
      <div className='tw-flex tw-flex-col md:tw-flex-row'>
        <div
          style={{ height: '50vh' }}
          className='tw-flex tw-items-center tw-justify-center tw-font-bold tw-w-full tw-text-4xl tw-y-1/2 md:tw-text-9xl md:tw-w-1/2'
        >
          <div className='tw-w-full'>Diversity = Opportunity</div>
        </div>
        <div className='md:tw-w-1/2 '>
          <animated.div style={{ ...animate }}>
            <img
              // style={{ transform: 'translate(26vw, -17vw)' }}
              className='mainImgPosition'
              src={mainImg}
              alt='mainImg'
            />
          </animated.div>
        </div>
      </div>
    </div>
  )
}
