import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { hexBrighterDarker } from '../services/color'

export default function Chart(props) {
  const [chart, setChart] = useState(null)
  // console.log(props.company.diversity_total)

  const initChart = {
    chartData: {
      labels: ['Diversity', 'Opportunity', 'Growth'],
      datasets: [
        {
          data: [
            props.company.diversity_total,
            props.company.growth_score,
            props.company.opportunity_score,
            // 1, 2, 3,
          ],
          backgroundColor: ['#8386D1', '#7B7EC2', '#6A6CA9'],
          // backgroundColor: [
          //   hexBrighterDarker(props.colors[0].color, 50, false, '4D'),
          //   hexBrighterDarker(props.colors[0].color, 25, true, '4D'),
          //   hexBrighterDarker(props.colors[0].color, 0, true, '4D'),
          // ],
          hoverBackgroundColor: ['#555BF9', '#4F55DD', '#494DB4'],
          // hoverBackgroundColor: [
          //   hexBrighterDarker(props.colors[0].color, 10, false),
          //   hexBrighterDarker(props.colors[0].color, 5, true),
          //   hexBrighterDarker(props.colors[0].color, 0, true),
          // ],

          borderWidth: 0,
          cutoutPercentage: 10,
        },
      ],
    },
  }

  useEffect(() => {
    setChart(initChart)
  }, [props.colors])

  if (!chart) return <div>Loading...</div>
  if (chart)
    return (
      <div className='chart' style={{ width: '100%' }}>
        <Doughnut
          data={chart.chartData}
          width={200}
          height={300}
          options={{
            title: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            rotation: 270,
            circumference: 180,
            cutoutPercentage: 10,
            animation: {
              duration: 1000,
              animateRotate: props.rotate,
              easing: 'linear',
              colors: false,
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                cornerRadius: 0,
                backgroundColor: 'rgba(85, 91, 249, 0.4)',
                bodyFontSize: 40,
                caretSize: 0,
                displayColors: false,
              },
            },
          }}
        />
      </div>
    )
}
