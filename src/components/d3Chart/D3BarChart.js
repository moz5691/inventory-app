import React, {Component} from 'react';
import * as d3 from "d3";

// D3 set up here.

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', 1200)
  .attr('height', 600);

const margin = { top: 20, right: 20, bottom: 100, left: 80 };
const graphWidth = 1200 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg
  .append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

const xAxisGroup = graph
  .append('g')
  .attr('transform', `translate(0, ${graphHeight})`);

const yAxisGroup = graph.append('g');

const y = d3.scaleLinear().range([graphHeight, 0]);

const x = d3
  .scaleBand()
  .range([0, 1000])
  .paddingInner(0.2)
  .paddingOuter(0.2);

// create and call the axes
const xAxis = d3.axisBottom(x);
const yAxis = d3
  .axisLeft(y)
  .ticks(5)
  .tickFormat(d => d + '');

// update x-axis
xAxisGroup
  .selectAll('text')
  .attr('transform', 'rotate(-40)')
  .attr('text-anchor', 'end')
  .attr('fill', 'blue');

const t = d3.transition().duration(500);


class D3BarChart extends Component {

  componentDidUpdate () {
    console.log("data cdm", this.props.statChoice);
    this.drawBarChart(this.props.data, this.props.statChoice);
  }
  componentDidMount () {
    console.log("data cdm", this.props.statChoice);
    this.drawBarChart(this.props.data, this.props.statChoice);
  }
  // componentWillUnmount() {
  //   svg.selectAll('rect').remove();
  //   svg.selectAll('text').remove();
  //   svg.selectAll('g').remove();
  // }

  drawBarChart = (data, choice) =>{
    // console.log("data", data)
    const min = d3.min(data, d => d[`${choice}`]);
    const max = d3.max(data, d => d[`${choice}`]);
    const extent = d3.extent(data, d => d[`${choice}`]);
    // 1. update any scale change.
    y.domain([0, max]);
    x.domain(data.map(item => item.title));

    // 2. join the data to rects.
    const rects = graph.selectAll('rect').data(data);

    // 3. remove unwanted (if any) shapes using exit()
    rects.exit().remove();

    // 4. update current shapes in DOM
    rects
      .attr('width', x.bandwidth)
      .attr('x', d => x(d.title))
      .attr('fill', 'orange');
    // .transition(t)
    // .attr('height', d => graphHeight - y(d.orders))
    // .attr('y', d => y(d.orders));

    // 5. Address enter selection.
    rects
      .enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', 0)
      .attr('fill', 'blue')
      .attr('x', d => x(d.title))
      .attr('y', graphHeight)
      .merge(rects)
      .transition(t)
      .attrTween('width', this.widthTween)
      .attr('y', d => y(d[`${choice}`]))
      .attr('height', d => graphHeight - y(d[`${choice}`]));
    // call axies
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

  }

  widthTween = e => {
    // define interpolation
    // d3.interpolate returns a function which we call 'i'
    let i = d3.interpolate(0, x.bandwidth());
    // return a function which takes in a time ticker 't'
    return function(t) {
      // return the value from passing the ticker into the interpolation.
      return i(t);
    };
  };




  render() {

    return (

      <div id={"#" + this.props.id}></div>

    );
  }
}

export default D3BarChart;