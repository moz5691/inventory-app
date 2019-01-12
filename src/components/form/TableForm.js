import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table} from 'semantic-ui-react';
import _ from 'lodash';

class TableForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      column: null,
      direction: null,

     }
  }

  // const {id, sku, description, title, entryDate, itemPrice, qtyIn, qtySold } = this.props.inventories;

  // handleSort = clickedColumn => () => {
  //
  // }

  onClick = () => {
    console.log(this.props.inventories)
  }

  handleSort = clickedColumn => () => {
    const {inventories : data} = this.props;

    const { column, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {

    // const {id, sku, description,title, entryDate, itemPrice, qtyIn, qtySold } = this.props.inventories;

    // console.log('data', this.state.data)
    // console.log('data', this.props.inventories)
    // const tableData =

    // const headerRow = ['SkU', 'Title', 'Description', 'Price', 'Qty In', 'Qty Sold', 'Stock'];
    const { column, direction } = this.state;
    const data = this.props.inventories;

    return (
      <div>
        <h1>Inventory List</h1>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'sku' ? direction : null}
                onClick={this.handleSort('sku')}
              >
                SKU
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'title' ? direction : null}
                onClick={this.handleSort('title')}
              >
                Title
              </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === 'description' ? direction : null}
                onClick={this.handleSort('description')}
              >
                Description
              </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === 'itemPrice' ? direction : null}
                onClick={this.handleSort('itemPrice')}
              >
                Price
              </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === 'entryDate' ? direction : null}
                onClick={this.handleSort('entryDate')}
              >
                Date
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'qtyIn' ? direction : null}
                onClick={this.handleSort('qtyIn')}
              >
                QTY IN
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'qtySold' ? direction : null}
                onClick={this.handleSort('qtySold')}
              >
                QTY SOLD
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'stock' ? direction : null}
                onClick={this.handleSort('stock')}
              >
                STOCK
              </Table.HeaderCell>

            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ sku, title, description, itemPrice, entryDate, qtyIn, qtySold, stock }) => (
              <Table.Row key={sku}>
                <Table.Cell>{sku}</Table.Cell>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{itemPrice}</Table.Cell>
                <Table.Cell>{entryDate}</Table.Cell>
                <Table.Cell>{qtyIn}</Table.Cell>
                <Table.Cell>{qtySold}</Table.Cell>
                <Table.Cell>{qtyIn-qtySold}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <button onClick={this.onClick}></button>
      </div>
    );
  }
}

export default TableForm;