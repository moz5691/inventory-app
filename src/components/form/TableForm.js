import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

class TableForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      column: null,
      direction: null,
      data: props.inventories
    }
  }

  //https://hackernoon.com/common-pitfall-in-initialising-state-based-on-props-in-react-js-d56795a944aa

  componentWillReceiveProps(nextProps) {
    if(nextProps.inventories !== this.props.inventories){
      this.setState({data:nextProps.inventories});
    }
  }

  handleSort = clickedColumn => () => {

    const { column, direction, data } = this.state

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

  isStockLow = (qty, stock) => ( stock / qty * 100 < 20 )


  render() {

    const { column, direction, data } = this.state;

    return (
      <div>
        <Table sortable celled fixed inverted selectable color={"black"}>
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
            {_.map(data, ({ id, sku, title, description, itemPrice, entryDate, qtyIn, qtySold, stock }) => {

              return (
                <Table.Row key={id}>
                  <Table.Cell><Link to={`/edit/${id}`}>{sku}</Link></Table.Cell>
                  <Table.Cell>{title}</Table.Cell>
                  <Table.Cell>{description}</Table.Cell>
                  <Table.Cell>${itemPrice}</Table.Cell>
                  <Table.Cell>{moment(entryDate).format('YYYY-MM-DD')}</Table.Cell>
                  <Table.Cell>{qtyIn}</Table.Cell>
                  <Table.Cell>{qtySold}</Table.Cell>
                  <Table.Cell negative={this.isStockLow(qtyIn, stock)} >{stock}</Table.Cell>
                </Table.Row>
              )
            }
            )}
          </Table.Body>
        </Table>

      </div>
    );
  }
}

export default TableForm;