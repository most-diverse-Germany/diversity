import React from 'react'
import BannerIdea from './BannerIdea'

export default function HeaderIdea() {
  
  const imgStyle = {
    position: 'absolute',
    top: '150px',
    // height: '200px',
    left: '25%',
    width: '50%'
  }

  return (
    <div style={{ backgroundColor: '#67ecc8',height: '200px' }}>
    <div>
      <BannerIdea />
      <img style={imgStyle} src="https://res.cloudinary.com/finstababy/image/upload/v1621446490/MD1G_logo_FINAL_cjwvr4.png" alt="header" />
      
    </div>
    </div>
  )
}

