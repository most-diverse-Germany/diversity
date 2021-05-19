import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Spinner from './Spinner';
import './CompanyRow.css'

export default function CompanyRow(props) {
  
  const averageScore = ((props.company.diversity_total + props.company.growth_score + props.company.opportunity_score) / 3);
  const graph = (averageScore - 2.8) * 100

  // useEffect(() => {
  //   (window.innerWidth / 3.57) * (averageScore -2.5)
  // })
  // BETWEEN 2.83 AND 3.57

  // (overallScore * 200) - 500

  const animate = useSpring({
    from: { opacity: 0, width: '0vw' },
    to: { opacity: 1, width: `${graph}vw`},
    config:
    {
      // duration: 1000,
      tension: 50,
      mass: 2,
      friction: 26,
      velocity: 0,
      precision: 0.01
    }
  })

  const scoreStyle = {
    fontWeight: '900',
    color: props.backgroundColor,
    backgroundColor: props.listColor
    // width: '60%'
  }

  const nameStyle = {
    color: props.color,
    textAlign: 'right',
    fontWeight: '900',
    width: '140px',
    minWidth: '140px',
    paddingRight: '0.4rem'
  }

  // console.log(props.company);
  

  if (props.company.length === 0) return (<p>no results</p>)

  return (
    
    <div style={{ backgroundColor: props.backgroundColor}} className="tw-flex tw-items-center tw-justify-start tw-m-4" key={props.company._id}>

        <h3 style={nameStyle} className="compName tw-text-xs md:tw-text-sm tw-text-imagineText">{props.company.company_name.toUpperCase()}</h3>      
        
        <animated.div style={animate}>
        <h3 className="listName md:tw-p-1" style={scoreStyle}>
        <p className="textName"> {averageScore.toFixed(2)} </p> 
        </h3>
        </animated.div>
    </div>
    
  )
} 