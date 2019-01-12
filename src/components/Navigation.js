import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from "../actions/auth";


class Navigation extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu secondary>
          <Menu.Item
            as={Link} to={'/'}
            name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            as={Link} to={'/add'}
            name='add'
            active={activeItem === 'add'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to={'/edit'}
            name='edit'
            active={activeItem === 'edit'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as={Link} to={'/stat'}
              name='stat'
              active={activeItem === 'stat'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              // active={activeItem === 'logout'}
              onClick={this.props.startLogout}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    startLogout: ()=>dispatch(startLogout())
  }
)

export default connect(null, mapDispatchToProps )(Navigation);