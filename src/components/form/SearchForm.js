import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {DateRange} from 'react-date-range';
import DatePicker from 'react-datepicker';
import {Input, Dropdown, Button, Form} from 'semantic-ui-react';
import {setTextFilter, sortByDate, sortByPrice, sortByQtyIn, sortByQtySold, setStartDate, setEndDate} from '../../actions/filters';
import momemt from 'moment';

const selectOptions = [
  {key:"date", value: "date", text:"Date"},
  {key:"price", value:"price", text:"Price"},
  {key:"qtyIn", value:"qtyIn", text:"Stock In"},
  {key:"sold", value:"sold", text:"Sold"}
]

class Home extends Component {

  handleChangeStartDate = (startDate) => {
    console.log("start date", startDate)
    this.props.dispatch(setStartDate(startDate))
  }

  handleChangeEndDate = (endDate) => {
    console.log("end date", endDate)
    this.props.dispatch(setEndDate(endDate))

  }
  handleInputChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
  }

  handleSelectChange = (e, data) => {
    switch (data.value) {
      case 'date':
        return this.props.dispatch(sortByDate());
      case 'price':
        return this.props.dispatch(sortByPrice());
      case 'sold':
        return this.props.dispatch(sortByQtySold());
      case 'qtyIn':
        return this.props.dispatch(sortByQtyIn());
      default:
        return;
    }
  }

  render() {

    return (
      <div style={{"margin":"60px"}}>
        <Form >
          <h1>Search Items</h1>

            <Input
              value={this.props.filters.text}
              onChange={this.handleInputChange}
              label="Search" icon={"search"} placeholder={"Search..."}/>


            <Dropdown
              text={"Sort by"}
              onChange={this.handleSelectChange}
              placeholder={"select your search option."}
              selection
              search
              options={selectOptions}/>


          <br/>
          <br/>
          <h3>Pick Date Range</h3>
          <DatePicker
            selected={this.props.filters.startDate}
            selectsStart
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onChange={this.handleChangeStartDate}
          />

          <DatePicker
            selected={this.props.filters.endDate}
            selectsEnd
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onChange={this.handleChangeEndDate}
          />
          <br/>
          <br/>

        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    { filters: state.filters }
  )
}


export default connect(mapStateToProps, null)(Home);