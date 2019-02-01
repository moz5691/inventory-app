import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddEditForm from './form/AddEditForm';
import {asyncAddInventory} from "../actions/inventories";
import {Header, Icon, Segment} from 'semantic-ui-react';
import {bounceInLeft} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

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


class AddPage extends Component {

  onSubmit = (inventory) => {
    console.log('add inventory', inventory);
    this.props.asyncAddInventory(inventory);
    this.props.history.push('/landing');
  }

  render() {
    return (
      <div style={{marginTop:"20px"}}>
        <StyleRoot>
          <div style={styles.bounceInLeft}>
            <Header as={"h2"} color={"grey"}>
              <Icon name={"plus"} color={"green"}/>
              Add new</Header>
          </div>
        </StyleRoot>

        <AddEditForm onSubmit={this.onSubmit}/>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  asyncAddInventory: (inventory) => dispatch(asyncAddInventory(inventory))
})

export default connect(null, mapDispatchToProps )(AddPage);