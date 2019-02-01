import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, TextArea, Image, Progress, Grid, Label,Divider} from 'semantic-ui-react';
import {storage} from '../../firebase/firebase'
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
      photoLink: props.inventory ? props.inventory.photoLink : "",
      note: props.inventory ? props.inventory.note : "",
      error: "",
      // image upload state, image, url, progress
      image: null,
      // photoUrl: props.inventory ? props.inventory.photoUrl: '',
      url: '',
      progress: 0,
      submitCheckBox: false
    }
  }


  onDateChange = (date) => {
    this.setState({entryDate: date})
  }

  // onDateSelect = (date) => {
  //   this.setState({entryDate: date})
  // }

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
    if (e.target.files[0]){
      const image = e.target.files[0];
      // const photoLink = e.target.value;
      this.setState({image})
    }
    // const photoLink = e.target.value;
    // this.setState({photoLink});
  }

  onToggleCheckBox = () => {
    console.log("checkbox clicked")
    const submitCheckBox = !this.state.submitCheckBox;
    this.setState({submitCheckBox})
  }



  // https://github.com/ikramhasib007/react-drawer/blob/image-upload/src/components/ImageUpload.jsx

  onPhotoUpload = () => {

    const {image} = this.state;

      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed',
        (snapshot) => {
          // progress function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log('download url', url);
            this.setState({photoLink:url});
          })
        });
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
          // photoUrl: this.state.photoUrl,
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
        // photoUrl: "",
        note: ""
      })

    }
  }

  render() {
    const {sku, title, description, entryDate, itemPrice, qtyIn, qtySold,
            note, submitCheckBox, photoLink, progress, image} = this.state;
    return (
      <div style={{"margin":"10px 50px"}}>
      <Grid columns={2} divided stackable>
          <Grid.Column>
            <Form onSubmit = {this.onSubmit}>
            <Form.Field>
              <Input placeholder='SKU'
                     value={sku}
                     onChange={this.onSkuChange}
                     label={{ tag: true, content: 'SKU', color:"green" }}
                     labelPosition='right'
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder='Title'
                     value={title}
                     onChange={this.onTitleChange}
                     label={{ tag: true, content: 'Title', color:"green" }}
                     labelPosition='right'
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder='Description'
                     value={description}
                     onChange={this.onDescriptionChange}
                     label={{ tag: true, content: 'Description' }}
                     labelPosition='right'
              />
            </Form.Field>
            <Form.Field>
              <label>Date Picker</label>
              <DatePicker
                selected = {entryDate}
                onChange = {this.onDateChange}
                // onSelect = {this.onDateSelect}
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder='Item Price'
                     value={itemPrice}
                     onChange={this.onItemPriceChange}
                     label={{ tag: true, content: 'Item Price', color:"" }}
                     labelPosition='right'
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder='Qty In'
                     value={qtyIn}
                     onChange={this.onQtyInChange}
                     label={{ tag: true, content: 'Qty In', color:"" }}
                     labelPosition='right'
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder='Qty Sold'
                     value={qtySold}
                     onChange={this.onQtySoldChange}
                     label={{ tag: true, content: 'Qty Sold', color:"" }}
                     labelPosition='right'
              />
            </Form.Field>
            <Form.Field>

            </Form.Field>
            <Form.Field>
            <TextArea placeholder='Note'
                      value={note}
                      onChange={this.onNoteChange}
            />
            </Form.Field>
              <Label size={"large"} color={"green"}>Image can be uploaded before "Submit".</Label>

            <Divider/>
            <Checkbox onChange={this.onToggleCheckBox}
                      checked={submitCheckBox}
                      label='Did you check everything is correct?    ' />{"  "}
            <Button
              style={{"marginLeft":"10px"}}
              type='submit' color={"green"}
              disabled = {!submitCheckBox}
              fluid
            >Submit</Button>
          </Form>
          </Grid.Column>


          <Grid.Column>

            <div className={"ui container"}>
              <Image src={photoLink ||
              'http://via.placeholder.com/400x300'}
                     alt="Uploaded images" height="300" width="400" verticalAlign={"middle"}/>
            </div>

            <Progress percent ={progress} indicating success>
              </Progress>
            <Input type={'file'}
                   placeholder='Photo Link'
              // value={this.state.photoLink}
                   onChange={this.onPhotoLinkChange}
                   label={{ tag: true, content: 'Photo Link', color:"" }}
                   labelPosition='right'
            />
              <p style={{"textAlign":"center"}}>Photo url: {photoLink} </p>
              <Button
                onClick={this.onPhotoUpload}
                color={"green"}
                disabled = {!!!image}
                fluid
              >Upload</Button>
          </Grid.Column>

      </Grid>

      </div>
    )
  }
}

export default AddEditForm;