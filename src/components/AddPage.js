import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddEditForm from './form/AddEditForm';
import {asyncAddInventory} from "../actions/inventories";

class AddPage extends Component {

  onSubmit = (inventory) => {
    console.log('add inventory', inventory);
    this.props.asyncAddInventory(inventory);
    this.props.history.push('/landing');
  }

  render() {
    return (
      <div>
        <h1>Add New Items</h1>
        <AddEditForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  asyncAddInventory: (inventory) => dispatch(asyncAddInventory(inventory))
})

export default connect(null, mapDispatchToProps )(AddPage);