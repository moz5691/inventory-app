import React, {Component} from 'react';
import {Bar, Line, Pie}  from 'react-chartjs-2';

class Chart extends Component {


  render() {
    return (
      <div>
        <Bar
          data={this.props.chartData}
          width={1000}
          height={500}
          options={
            {
              title: {
                display: true,
                text: 'title here ',
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
      </div>
    );
  }
}

export default Chart;