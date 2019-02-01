import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddEditForm from './form/AddEditForm';
import ModalForm from './form/ModalForm';
import {asyncEditInventory, asyncRemoveInventory} from "../actions/inventories";

import {bounceInLeft} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Header, Icon, Divider} from "semantic-ui-react";

/**
 *
 *
 */

const styles = {
  bounceInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
  }
}


class EditPage extends Component {

  state ={
    modalTrigger: false
  }
  onSubmit = (inventory) => {
    this.props.asyncEditInventory(this.props.inventory.id, inventory);
    this.props.history.push('/landing');
  }

  onRemove = () => {
    this.props.asyncRemoveInventory({id: this.props.inventory.id});
    this.props.history.push('/landing');
  }

  render() {
    return (
      <div style={{marginTop:"20px"}}>
        <StyleRoot>
          <div style={styles.bounceInLeft}>
            <Header as={"h2"} color={"grey"}>
              <Icon name={"edit outline"} color={"green"}/>
            Edit Item</Header>
          </div>
        </StyleRoot>
        <AddEditForm
          inventory = {this.props.inventory}
          onSubmit={this.onSubmit}/>
          <Divider/>
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