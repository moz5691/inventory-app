import React, {Component} from 'react';
// import BarChart from './d3Chart/BarChart';
// import D3BarChart from './d3Chart/D3BarChart'
import Chart from './chartRender/Chart';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';


class StatPage extends Component {

  state = {
    chartData: {}
  }

  componentDidMount() {
    this.getChartData();
  }

  getArray = (data, key) => (
      data.map(d => d[key] ))

  getChartData = (key) => {
    this.setState({
      chartData:{
        labels:[...this.getArray(this.props.inventories, key)],
        datasets:[
          {
            label:'Sales',
            data: [...this.getArray(this.props.inventories, key)],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
      }

    )


  }

  onClick = (e, data) => {
    console.log("stat choice", data)
    this.getChartData(data.name)
  }


  render() {
      console.log("d3 data", this.props.inventories)
    const data = this.props.inventories;
    return (
      <div>
        <h1>Stat page</h1>
        <Button name="qtySold" onClick={this.onClick}>QTY Sold</Button>
        <Button name="itemPrice" onClick={this.onClick}>Item Price</Button>
        <Button name="qtyIn" onClick={this.onClick}>QTY In</Button>
        {/*<BarChart data={this.state.data} w={this.state.width} h={this.state.height} id={this.state.id}/>*/}
        {/*<D3BarChart data={data} id={"canvas"} statChoice={this.state.statChoice}/>*/}
        <Chart chartData={this.state.chartData}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { inventories : state.inventories }
)

export default connect(mapStateToProps, null)(StatPage);