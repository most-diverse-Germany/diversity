import React from 'react';
import { useSpring, animated } from 'react-spring';


export default function CompanyRow(props) {
  
  const overallScore = ((props.company.diversity_total + props.company.growth_score + props.company.opportunity_score) / 3)

  // (overallScore * 200) - 500

  const animate = useSpring({
    from: { opacity: 0, width: 0 },
    to: { opacity: 1, width: (overallScore * 200) - 500 },
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
    fontSize: '8px',
    backgroundColor: '#e0296c',
    color: 'white',
    border: '1px solid #e0296c',
    padding: '0.4rem',
  }

  const nameStyle = {
    fontSize: '10px',
    fontWeight: '900',
    width: '150px',
    minWidth: '150px',
    border: '1px solid black',
    padding: '0.4rem',
  }

  return (
    
      <div className="tw-flex tw-items-center tw-justify-start tw-m-4" key={props.company._id}>

        <h3 style={nameStyle} className="tw-text-imagineText">{props.company.company_name}</h3>      
        
        <animated.div  style={animate}>
        <h3 style={scoreStyle}>{overallScore.toFixed(2)}</h3> 
        </animated.div>
    </div>
    
  )
} 
