import React, {Component} from 'react';
import {Bar, Line, Pie}  from 'react-chartjs-2';

class Chart extends Component {


  render() {
    switch (this.props.chartType){
      case 'bar':
        return (
          <Bar
            data={this.props.chartData}
            width={1000}
            height={500}
            options={
              {
                title: {
                  display: true,
                  text: 'Stat ',
                  fontSize: 25
                },

                maintainAspectRatio: false,
                legend:{
                  display: true,
                  position: 'right'
                }

              }
            }
          />
        )
      case 'line':
        return (
          <Line
            data={this.props.chartData}
            options={{
              title:{
                display:true,
                text:'Stat',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        )
      case 'pie':
        return (
          <Pie
            data={this.props.chartData}
            options={{
              title:{
                display:true,
                text:'Stat',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        )
      default:
        return (<div></div>)
    }

  }
}

export default Chart;