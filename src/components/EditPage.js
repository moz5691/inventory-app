import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddEditForm from './form/AddEditForm';
import ModalForm from './form/ModalForm';
import {Button} from 'semantic-ui-react';
import {asyncEditInventory, asyncRemoveInventory} from "../actions/inventories";

class EditPage extends Component {

  state ={
    modalTrigger: false
  }
  onSubmit = (inventory) => {
    // console.log('inventory', inventory);
    this.props.asyncEditInventory(this.props.inventory.id, inventory);
    this.props.history.push('/landing');
  }

  onRemove = () => {
    this.props.asyncRemoveInventory({id: this.props.inventory.id});
    this.props.history.push('/landing');
  }

  onModalTrigger = () =>{
    this.setState({modalTrigger: true})
  }

  render() {
    return (
      <div>
        <h1>Edit Item</h1>
        <AddEditForm
          inventory = {this.props.inventory}
          onSubmit={this.onSubmit}/>
        {/*<Button onClick={this.onRemove} color={"red"}>Delete</Button>*/}
        {/*<Button onClick={this.onModalTrigger}>Modal Test</Button>*/}
        {/* ModalForm includes Remove button*/}
        <ModalForm onRemove={this.onRemove} />
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
  asyncEditInventory: (id, inventory) => dispatch(asyncEditInventory(id, inventory)),
  asyncRemoveInventory: (data) => dispatch(asyncRemoveInventory(data))
})

export default connect(mapStateToProps,mapDispatchToProps )(EditPage);