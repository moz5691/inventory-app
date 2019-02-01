import React, {Component} from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import {Input, Dropdown, Label, Form, Divider, Header, Icon, Grid} from 'semantic-ui-react';
import {bounce, fadeIn, flash, zoomIn, bounceInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {setTextFilter, sortByDate, sortByPrice, sortByQtyIn, sortByQtySold, setStartDate, setEndDate} from '../../actions/filters';

const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  flash: {
    animation: 'x 4s',
    animationName: Radium.keyframes(flash, 'flash')
  },
  zoomIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  bounceInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
  }
}


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
        <StyleRoot>
          <div style={styles.bounce}>
            <Header as={"h2"} color={"grey"}>
              <Icon name={"sort alphabet down"} color={"green"}/>
              Search & Sort</Header>
          </div>
        </StyleRoot>
        <Divider/>
        <Form >
          <Grid divided={"vertically"} stackable>
            <Grid.Row columns={4}>
              <Grid.Column width={"6"}>
                <Form.Field>
                <Input
                  value={this.props.filters.text}
                  onChange={this.handleInputChange}
                  label="Search" icon={"search"}
                  transparent={false}
                  placeholder={"Search..."}/>
                <Label basic color='green' pointing='above'>
                  Search by title
                </Label>
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={"4"}>
                <Form.Field>
                <Dropdown
                  text={"Sort by"}
                  onChange={this.handleSelectChange}
                  placeholder={"select your search option."}
                  selection
                  search
                  options={selectOptions}/>
                <Label basic color='green' pointing='above'>
                  Choose sort category
                </Label>
                </Form.Field>
              </Grid.Column>
                <Grid.Column width={"3"}>
                  <DatePicker
                    selected={this.props.filters.startDate}
                    selectsStart
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onChange={this.handleChangeStartDate}
                  />
                  <Label basic color='green' pointing='above'>
                    Pick start date
                  </Label>
                </Grid.Column>
                <Grid.Column width={"3"}>
                  <DatePicker
                    selected={this.props.filters.endDate}
                    selectsEnd
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onChange={this.handleChangeEndDate}
                  />
                  <Label basic color='green' pointing='above'>
                    Pick end date
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          <br/>


          <br/>


        </Form>
        <Divider/>
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