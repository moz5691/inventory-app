import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableForm from './form/TableForm'
import {Table} from 'semantic-ui-react';

class Landing extends Component {



  render() {


    return (
      <div>
        <TableForm inventories = {this.props.inventories} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inventories: state.inventories
  };
}
export default connect(mapStateToProps, null)(Landing);