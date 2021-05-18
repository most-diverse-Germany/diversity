import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import "./styles.module.css"



export default function HamburgerMenu(props) {

  const [isOpen, setOpen] = useState(false);

  const handleToggle = function(toggled) {
   setOpen(toggled);

    // if(toggled) {
    //   this.setState({
    //     isOpen: false
    //   });
    // } else {
    //   this.setState({
    //     isOpen: true
    //   });
    // }
  };



  return (
    <div>


<div className='tw-z-20 tw-pt-8 tw-absolute tw-top-50'>
<Hamburger rounded toggled={isOpen} size={40} distance="lg" toggle={setOpen} duration={1} onToggle={handleToggle}/>
</div>

    <div className={
    isOpen ? 'tw-block' : 'tw-hidden'}  >
 
  <div className='tw-w-screen tw-h-screen tw-bg-imagineRed tw-ease-in tw-space-y-10 tw-z-10 '>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl tw-pt-16'>Element</a>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  </div>
  
  
</div>

    </div>
  )
}
