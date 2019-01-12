import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, TextArea} from 'semantic-ui-react'
import moment from 'moment';
import 'react-dates/initialize';
//import 'react-dates/lib/css/_datepicker.css'
//import { SingleDatePicker} from 'react-dates';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class AddEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sku: props.inventory ? props.inventory.sku : "",
      title: props.inventory ? props.inventory.title : "",
      description: props.inventory ? props.inventory.description : "",
      entryDate: props.inventory ? props.inventory.entryDate : new Date(),
      itemPrice: props.inventory ? props.inventory.itemPrice : "",
      qtyIn: props.inventory ? props.inventory.qtyIn : "",
      qtySold: props.inventory ? props.inventory.qtySold : "",
      photoLink: props.inventory ? props.inventory.photoLink : '',
      note: props.inventory ? props.inventory.note : "",
      error: ""
    }
    console.log("edit", props)
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.inventory !== this.props.inventory){
  //     this.setState({
  //       sku:nextProps.inventory.sku,
  //       title:nextProps.inventory.title,
  //       description: nextProps.inventory.description,
  //       entryDate: moment(nextProps.inventory.entryDate),
  //       itemPrice: nextProps.inventory.itemPrice,
  //       qtyIn: nextProps.inventory.qtyIn,
  //       qtySold: nextProps.inventory.qtySold,
  //       photoLink: nextProps.inventory.photoLink,
  //       note: nextProps.inventory.note
  //     });
  //   }
  // }


  onDateChange = (date) => {
    this.setState({entryDate: date})
  }

  onDateSelect = (date) => {
    this.setState({entryDate: date})
  }

  // onDateChange = (entryDate) => {
  //   if (entryDate) {
  //     this.setState({entryDate})
  //   }
  //
  // }
  // onFocusChange = ({focused}) => {
  //   this.setState({calendarFocused: focused })
  // }

  onSkuChange = (e) => {
    const sku = e.target.value;
    this.setState({sku});
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({title});
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description});
  }

  onItemPriceChange = (e) => {
    const itemPrice = e.target.value;
    // regex 12.34 format
    if(!itemPrice || itemPrice.match(/^\d+(\.\d{0,2})?$/)){
      this.setState({itemPrice});
    }
  }

  onQtyInChange = (e) => {
    const qtyIn = e.target.value;
    this.setState({qtyIn});
  }

  onQtySoldChange = (e) => {
    const qtySold = e.target.value;
    this.setState({qtySold});
  }

  onPhotoLinkChange = (e) => {
    const photoLink = e.target.value;
    this.setState({photoLink});
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({note})
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.sku || !this.state.title){
      this.setState({error: "Please enter SKU and Title."})
    } else {
      this.setState({error: ""});
      this.props.onSubmit(
        {
          sku: this.state.sku,
          title: this.state.title,
          description: this.state.description,
          entryDate: this.state.entryDate.valueOf(),  // take value only (not object)
          itemPrice: parseFloat(this.state.itemPrice),
          qtyIn: parseInt(this.state.qtyIn),
          qtySold: parseInt(this.state.qtySold),
          photoLink: this.state.photoLink,
          note: this.state.note
        }
      )

      // TODO schema on db side, sorting won't work as all stored as string.
      this.setState({
        sku: "",
        title: "",
        description: "",
        entryDate: new Date(),  // take value only (not object)
        itemPrice: "",
        qtyIn: "",
        qtySold: "",
        photoLink: "",
        note: ""
      })

    }
  }

  render() {
    return (
      <div className={"ui"} style={{"margin":"50px 200px",}}>
        <Form onSubmit = {this.onSubmit}>
          <Form.Field>
            <Input placeholder='SKU'
                   value={this.state.sku}
                   onChange={this.onSkuChange}
                   label={{ tag: true, content: 'SKU', color:"green" }}
                   labelPosition='right'

            />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Title'
                   value={this.state.title}
                   onChange={this.onTitleChange}
                   label={{ tag: true, content: 'Title', color:"green" }}
                   labelPosition='right'
            />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Description'
                   value={this.state.description}
                   onChange={this.onDescriptionChange}
                   label={{ tag: true, content: 'Description', color:"" }}
                   labelPosition='right'
            />
          </Form.Field>
          <Form.Field>
            <label>Date Picker</label>
            {/*<SingleDatePicker*/}
              {/*date = {this.state.entryDate}*/}
              {/*onDateChange = {this.onDateChange}*/}
              {/*focused = {this.state.calendarFocused}*/}
              {/*onFocusChange = {this.onFocusChange}*/}
              {/*numberOfMonths = {1}*/}
              {/*isOutsideRange = {()=>false}*/}
            {/*/>*/}
            <DatePicker
              selected = {this.state.entryDate}
              onChange = {this.onDateChange}
              onSelect = {this.onDateSelect}
            />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Item Price'
                   value={this.state.itemPrice}
                   onChange={this.onItemPriceChange}
                   label={{ tag: true, content: 'Item Price', color:"" }}
                   labelPosition='right'
            />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Qty In'
                   value={this.state.qtyIn}
                   onChange={this.onQtyInChange}
                   label={{ tag: true, content: 'Qty In', color:"" }}
                   labelPosition='right'
            />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Qty Sold'
                   value={this.state.qtySold}
                   onChange={this.onQtySoldChange}
                   label={{ tag: true, content: 'Qty Sold', color:"" }}
                   labelPosition='right'
            />
          </Form.Field>
          <Form.Field>
            <Input placeholder='Photo Link'
                   value={this.state.photoLink}
                   onChange={this.onPhotoLinkChange}
                   label={{ tag: true, content: 'Photo Link', color:"" }}
                   labelPosition='right'/>
          </Form.Field>
          <Form.Field>
            <TextArea placeholder='Note'
                   value={this.state.note}
                   onChange={this.onNoteChange}
            />
          </Form.Field>
          <Checkbox label='Did you check everything is correct?    ' />{"  "}
          <Button style={{"marginLeft":"10px"}} type='submit' color={"green"}>Submit</Button>
        </Form>


      </div>
    );
  }
}

export default AddEditForm;