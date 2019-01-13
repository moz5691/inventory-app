import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableForm from './form/TableForm'
import filterHelper from '../functions/filterHelper'
import {Table} from 'semantic-ui-react';

class Landing extends Component {



  render() {

    console.log('props before sending out', this.props.inventories)
    return (
      <div className={"ui container"}>
        <TableForm inventories = {this.props.inventories} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // inventories: state.inventories,
    inventories: filterHelper(state.inventories, state.filters),
    filters: state.filters
  };
}
export default connect(mapStateToProps, null)(Landing);

// TODO   add filterFunction here and pass updated inventories to props.   Then it renders updated TableForm.