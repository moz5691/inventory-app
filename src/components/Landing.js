import React from 'react';
import {connect} from 'react-redux';
import TableForm from './form/TableForm'
import filterHelper from '../functions/filterHelper';
import {Header, Icon} from 'semantic-ui-react';


import {bounceInLeft} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounceInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
  }
}

const Landing =(props) => {

    return (
      <div className={"ui"} style={{margin:"20px 10px"}}>
        <StyleRoot>
          <div style={styles.bounceInLeft}>
            <Header as={"h2"} color={"grey"}>
              <Icon name={"cart"} color={"green"}/>
              Inventory</Header>
          </div>
        </StyleRoot>
        <TableForm inventories = {props.inventories} />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    inventories: filterHelper(state.inventories, state.filters),
    filters: state.filters
  };
}
export default connect(mapStateToProps, null)(Landing);
