import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function Component1() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <div className={c1Style}>
      <animated.div style={props}>I will fade in</animated.div>
    </div>
  )
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem',
}
