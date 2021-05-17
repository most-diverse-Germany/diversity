import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


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
    fontSize: '8px',
    fontWeight: '900',
    backgroundColor: '#e0296c',
    color: 'white',
    border: '1px solid #e0296c',
    padding: '0.4rem',
    // width: '60%'
  }

  const nameStyle = {
    fontSize: '10px',
    fontWeight: '900',
    width: '150px',
    minWidth: '150px',
    border: '1px solid black',
    padding: '0.4rem',
  }

  // console.log(props.company);
  

  if (!props.company) return (<h3>no results</h3>)

  return (
    
    <div className="tw-flex tw-items-center tw-justify-start tw-m-4" key={props.company._id}>

      

        <h3 style={nameStyle} className="tw-text-imagineText">{props.company.company_name}</h3>      
        
        <animated.div style={animate}>
        <h3 style={scoreStyle}>{averageScore.toFixed(2)}</h3> 
        </animated.div>
    </div>
    
  )
} 
