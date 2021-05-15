import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';



export default class Chart extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      chartData:{
        labels: [
          "Diversity",
          "Opportunity",
          "Growth"
      ],
      datasets: [
          {
               data: [this.props.company.diversity_total, this.props.company.growth_score, this.props.company.opportunity_score],
            
              backgroundColor: [
                  "#E0296C",
                  "#3C7695",
                  "#954E8B"
              ],
              hoverBackgroundColor: [
                  "#EC6A8E",
                  "#56B39E",
                  "#F7A559"
              ],
              borderWidth: 2
          }]
      }
    }
  }

 
  render() {
    //  console.log(this.state.props.company)
    
    return (
     
      <div className="chart" style={{width:"100%",height:"100%"}}>

          <Doughnut
            data={this.state.chartData}
            width={100}
	          eight={50}
            
            

            options={{
             
               responsive: true,
                maintainAspectRatio: false,
                rotation: 86 * Math.PI,
                circumference: 57 * Math.PI,
                 legend: {
                   display: false,
                   position: 'right'
                 }
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