import React, { Component, PureComponent } from 'react'
import { Doughnut } from 'react-chartjs-2'

function hexBrighterDarker(hex, percent, isDark) {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, '')

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, '$1$1')
  }

  var r = parseInt(hex.substr(0, 2), 16),
    g = parseInt(hex.substr(2, 2), 16),
    b = parseInt(hex.substr(4, 2), 16)

  if (isDark) {
    return (
      '#' +
      (0 | ((1 << 8) + r * (1 - percent / 100))).toString(16).substr(1) +
      (0 | ((1 << 8) + g * (1 - percent / 100))).toString(16).substr(1) +
      (0 | ((1 << 8) + b * (1 - percent / 100))).toString(16).substr(1)
    )
  } else {
    return (
      '#' +
      (0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
    )
  }
}

export default class Chart extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      // testCounter: 0,
      chartData: {
        labels: ['Diversity', 'Opportunity', 'Growth'],
        datasets: [
          {
            data: [
              // this.props.company.diversity_total,
              // this.props.company.growth_score,
              // this.props.company.opportunity_score,
              1, 2, 3,
            ],
            backgroundColor: ['#8386D1', '#7B7EC2', '#6A6CA9'],
            // backgroundColor: [
            //   hexBrighterDarker(this.props.colors.color, 0, false),
            //   hexBrighterDarker(this.props.colors.color, 25, true),
            //   hexBrighterDarker(this.props.colors.color, 50, true),
            // ],
            hoverBackgroundColor: ['#555BF9', '#4F55DD', '#494DB4'],
            borderWidth: 0,
            cutoutPercentage: 10,
          },
        ],
      },
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (!this.props.company.company_name === prevProps.company.company_name) {
  //     //
  //   }
  // }

  render() {
    //  console.log(this.state.props.company)

    return (
      <div className='chart' style={{ width: '100%' }}>
        <Doughnut
          data={this.state.chartData}
          width={200}
          height={300}
          options={{
            title: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            rotation: 270,
            circumference: 180,
            cutoutPercentage: 10,

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
}

////////////////////////////////

// import React from 'react'
// import { Pie } from 'react-chartjs-2'

// //defaults.global.tooltips.enabled = false
// //defaults.global.legend.position = 'bottom'

// const Chart = () => {
//   return (
//     <div>
//       <Pie
//         data={{
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [
//             {
//               label: '# of votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//               ],
//               borderWidth: 1,
//             },
//             // {
//             //   label: 'Quantity',
//             //   data: [47, 52, 67, 58, 9, 50],
//             //   backgroundColor: 'orange',
//             //   borderColor: 'red',
//             // },
//           ],
//         }}
//         height={400}
//         width={600}
//         options={{
//           maintainAspectRatio: false,
//           scales: {
//             yAxes: [
//               {
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               },
//             ],
//           },
//           legend: {
//             labels: {
//               fontSize: 25,
//             },
//           },
//         }}
//       />
//     </div>
//   )
// }

// export default Chart

/////////////////////////////////////////////////Example Ahmed////////////////////////
// import React, { Component } from 'react';
// import Chart from "chart.js";
// export default class PieChart extends Component {
//   chartRef = React.createRef();
//   state = {
//     myChartRef: undefined,
//   }
//   componentDidMount() {
//     this.setState({
//       myChartRef: this.chartRef.current.getContext("2d")
//     })
//   }
//   render() {
//     if(this.state.myChartRef && this.props.symbolsPrice && this.props.portfolio.length !== 0)
//     {
//       const labels = Object.keys(this.props.symbolsPrice);
//       const valueArray = this.props.portfolio.map(element => {
//         return ((element.count) * this.props.symbolsPrice[element.ticker])
//       })
//       const sum = valueArray.reduce((a, b) => a + b, 0);
//       const data = valueArray.map(element => {
//         return ((element / sum)*100).toFixed(2);
//       })
//       let colorsArray = this.props.portfolio.map(element => {
//         let r = Math.floor(Math.random() * 200);
//         let g = Math.floor(Math.random() * 200);
//         let b = Math.floor(Math.random() * 200);
//         return('rgb(' + r + ', ' + g + ', ' + b + ')')
//       })
//       this.state.myChart = new Chart(this.state.myChartRef, {
//         type: "doughnut",
//         data: {
//             datasets: [
//                 {
//                   data: data,
//                   backgroundColor: colorsArray,
//                 }
//             ],
//             labels: labels
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: true,
//           legend: {
//             labels: {
//               fontColor: "white",
//               fontSize: 18
//             }
//           }
//         }
//       });
//     }
//     return (
//       <div style={{width: "45vw", height: "auto"}} className="ml-3 mr-4 border p-3 border-white shadow p-3 mb-5 bg-body rounded">
//         <h4 className='mb-3'>Portfolio Distribution %</h4>
//         <div>
//             <canvas style={{width: "40vw", height: "23vh"}} id="myChart" ref={this.chartRef}/>
//         </div>
//       </div>
//     )
//   }
// }
