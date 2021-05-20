import React from 'react'

export default function TrailImg() {

  const imgStyle = {
    position: 'absolute',
    transform: 'translate(100px, -150px)'
  }

  return (
    <div>
      <img style={imgStyle} src="https://res.cloudinary.com/finstababy/image/upload/a_0232/v1621528891/trail-01_dybo5v.png" alt="trail image" />
    </div>
  )
}
