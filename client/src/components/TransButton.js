import React, { useState } from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'
// import styles from '../components/styles.module.css'

export default function TransButton(props) {
  const [open, toggle] = useState(false)
  const [ref, { width }] = useMeasure()
  const buttonProp = useSpring({ width: open ? width : 0 })

  return (
    <div className={props.size}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
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
          onMouseMove={() => toggle(!open)}
        >
          <animated.div
            style={{
              positon: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: `${props.fillColor}`,
              ...buttonProp,
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
              color: `${props.textColor}`,
            }}
          >
            {/* {prop.width.to((x) => x.toFixed(0))} */}
            {props.text}
          </animated.div>
        </div>
      </div>
    </div>
  )
}
