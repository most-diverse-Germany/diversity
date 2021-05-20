import React, { useState } from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'

// props.text
// props.twHeight
// props.twWidth
// props.color
// props.backgroundColor
// props.fillColor
// props.symbol

export default function TransButton(props) {
  const [open, toggle] = useState(false)
  const [ref, { height }] = useMeasure()
  // const buttonProp = useSpring({ height: open ? height : 0 })

  const animate = useSpring({
    height: open ? height : 0,
    // from: {
    //   // width: '0vw',
    // },
    // to: {
    //   // width: '100vw',
    // },
    config: {
      // duration: 2000,
      // tension: 500,
      // mass: 3,
      // friction: 42,
      // velocity: 1,
      // precision: 0.001,
      // tension: 120,
      // friction: 14,
    },
  })

  return (
    <button
      type='submit'
      onClick={props.onClick}
      className={props.className}
      style={props.style}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <div
          ref={ref}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            backgroundColor: `${props.backgroundColor}`,
            overflow: 'hidden',
          }}
          // onMouseOver={() => toggle(!open)}
          onMouseEnter={() => toggle(true)}
          onMouseLeave={() => toggle(false)}
        >
          <animated.div
            style={{
              positon: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: `${props.fillColor}`,
              ...animate,
            }}
          />
          <animated.div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: `${props.color}`,
            }}
          >
            {props.text}
            <svg
              style={{
                height: '30%',
                width: '20%',
                textAlign: 'left',
                fill: 'currentcolor',
              }}
            >
              {props.symbol}
            </svg>
          </animated.div>
        </div>
      </div>
    </button>
  )
}
