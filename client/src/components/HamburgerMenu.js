import React, { useState, useEffect } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import "./styles.module.css";
//import { debounce } from './helper';
import { useSpring, animated } from "react-spring";


export default function HamburgerMenu(props) {

  

  const [isOpen, setOpen] = useState(false);

  const handleToggle = function(toggled) {
   setOpen(toggled);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  // for using debounce: https://davidwalsh.name/javascript-debounce-function
  // const handleScroll = debounce(() => {
  //   const currentScrollPos = window.pageYOffset;
  //   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  //   setPrevScrollPos(currentScrollPos);
  // }, 100);


  const handleScroll = () => {    
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 20) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {    
    window.addEventListener('scroll', handleScroll);   
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '50px',
    width: '50px',
    transition: 'top 0.7s' ,
    display: 'flex',
    backgroundColor: '#E0296C',
    borderRadius: '50px'
  }

  const animate = useSpring({
  //  opacity: isOpen ? 1 : 0
  from: { opacity: 0, width: '0vw', height:'0vw' },
    to: { opacity: 1, width: '100vw', height:'100vh'},
    config:
    {
      // duration: 1000,
      tension: 50,
      mass: 2,
      friction: 26,
      velocity: 1,
      precision: 0.01
    }
  })


  const toggleMenu = () => {
    setOpen(!isOpen);
  };

    
  return (

<>    
    
    <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>  
    <button onClick={toggleMenu}>
    <Hamburger rounded color='#FCE7CC' toggled={isOpen} size={35} distance="md" toggle={setOpen} duration={1} onToggle={handleToggle} />
    </button>
   

    <div className={
    isOpen ? 'tw-block' : 'tw-hidden'} >
 
  <animated.div key={props} style={animate} className='tw-w-screen tw-h-screen tw-bg-imagineRed tw-space-y-10'>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  <a href="#" className='tw-block tw-px-4 tw-font-semibold tw-text-6xl'>Element</a>
  </animated.div>

</div>

  </div>


  )
}
