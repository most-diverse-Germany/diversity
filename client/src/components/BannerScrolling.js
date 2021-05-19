import React, { useState } from "react";
import './BannerScrolling.css'

const BannerScrolling = (props) => {

  return (
    <>
      
      <div>
      <hr/>
    <p className="marquee">
        <span><h1>{props.text}</h1></span>
</p>
<p className="marquee marquee2">
        <span><h1>{props.text}</h1></span>
        </p>
        <hr/>
      </div>
    </>

  )
};

export default BannerScrolling;