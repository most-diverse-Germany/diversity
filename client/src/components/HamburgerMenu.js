import React, { useState, useEffect } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import "./styles.module.css";
import { debounce } from './helpers';
import { useTrail, animated as a } from "react-spring";


export default function HamburgerMenu(props) {

  const [isOpen, setOpen] = useState(false);

  const handleToggle = function(toggled) {
   setOpen(toggled);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset;
  //   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  //   setPrevScrollPos(currentScrollPos);
  // }, 100);


  const handleScroll = () => {    
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {    
    window.addEventListener('scroll', handleScroll);   
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);


  return (
    <div>

<div className={{
  top: visible ? '0' : '-60px'}}>

<Hamburger rounded toggled={isOpen} size={40} distance="lg" toggle={setOpen} duration={1} onToggle={handleToggle}/>
</div>

    <div className={
    isOpen ? 'tw-block' : 'tw-hidden'} >
 
  <div className='tw-w-screen tw-h-screen tw-bg-imagineRed tw-ease-in tw-space-y-10 tw-z-10 '>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl tw-pt-16'>Element</a>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  </div>
  
  
</div>

   </div>
  )
}
