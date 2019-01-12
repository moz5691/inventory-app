import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddEditForm from './form/AddEditForm';
import {asyncEditInventory} from "../actions/inventories";

class EditPage extends Component {

  onSubmit = (inventory) => {
    console.log('inventory', inventory);
    this.props.asyncEditInventory(this.props.inventory.id, inventory);
    this.props.history.push('/landing');
  }

  render() {
    return (
      <div>
        <h1>Add New Items</h1>
        <AddEditForm
          inventory = {this.props.inventory}
          onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => (
  {
    inventory: state.inventories.find(inv => inv.id === props.match.params.id)
  }
)

const mapDispatchToProps = (dispatch) => ({
  asyncEditInventory: (id, inventory) => dispatch(asyncEditInventory(id, inventory))
})

export default connect(mapStateToProps,mapDispatchToProps )(EditPage);