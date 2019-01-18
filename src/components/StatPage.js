import React, {Component} from 'react';
// import BarChart from './d3Chart/BarChart';
// import D3BarChart from './d3Chart/D3BarChart'
import Chart from './chartRender/Chart';
import {connect} from 'react-redux';
import {Button, Dropdown, Form} from 'semantic-ui-react';
import getRandomRgba from './utils/getRandomRgba';
import {sortByDate, sortByPrice, sortByQtyIn, sortByQtySold} from "../actions/filters";


const labelSet = {itemPrice: "$", qtySold: "unit", qtyIn: "unit"}
const selectOptions = [
  {key:"bar", value:"bar", text:'Bar'},
  {key:"line",value:"line", text:'Line'},
  {key:"pie", value:"pie", text:"Pie"}
]

class StatPage extends Component {

  state = {
    chartData: {},
    chartType: 'bar'
  }

  componentDidMount() {
    this.getChartData();
  }

  getLabelsArray = (data, key) => (
      data.map(d => d[key] ))

  setLabel = (key) => {
    if(key) {
      return labelSet[key]
    }
    return ''
  }

  setBackgroundColor = () => {
    const backgroundColorLength = this.props.inventories.length;
    let backgroundColor = [];
    for(let i = 0; i < backgroundColorLength; i++){
      backgroundColor.push(getRandomRgba());
    }
    return backgroundColor;
  }


  getChartData = (key) => {
    this.setState({
      chartData:{
        labels:[...this.getLabelsArray(this.props.inventories, "title")],
        datasets:[
          {
            label: this.setLabel(key),
            data: [...this.getLabelsArray(this.props.inventories, key)],
            backgroundColor: this.setBackgroundColor()
          }
         ]
        }
      }
    )
  }

  onClick = (e, data) => {
    // console.log("stat choice", data)
    this.getChartData(data.name)
  }

  handleSelectChange = (e, data) => {
    this.setState({chartType: data.value})
  }

  render() {
      // console.log("d3 data", this.props.inventories)
    // const data = this.props.inventories;
    return (
      <div>
        <h1>Stat page</h1>


        <Button name="qtySold" onClick={this.onClick}>QTY Sold</Button>
        <Button name="itemPrice" onClick={this.onClick}>Item Price</Button>
        <Button name="qtyIn" onClick={this.onClick}>QTY In</Button>
        <Dropdown
          text={"Chart Type"}
          onChange={this.handleSelectChange}
          placeholder={"Select Chart Type."}
          selection
          search
          options={selectOptions}/>
        {/*<BarChart data={this.state.data} w={this.state.width} h={this.state.height} id={this.state.id}/>*/}
        {/*<D3BarChart data={data} id={"canvas"} statChoice={this.state.statChoice}/>*/}
        <Chart chartData={this.state.chartData} chartType={this.state.chartType}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { inventories : state.inventories }
)

export default connect(mapStateToProps, null)(StatPage);