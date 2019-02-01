import React, {Component} from 'react';
import {Menu, Image, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from "../actions/auth";



class Navigation extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

  }



  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu secondary size={"massive"} color={"blue"} inverted>
          <Menu.Item
            as={Link} to={'/home'}
            name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Image style={{height:"40px"}} src={"/assets/bento-box-icon.png"}/>
          </Menu.Item>
          <Menu.Item
            as={Link} to={'/add'}
            name='add'
            active={activeItem === 'add'}
            onClick={this.handleItemClick}>
            <Icon color={"black"} name={"plus square outline"}/>
            Add
          </Menu.Item>

          <Menu.Item
            as={Link} to={'/landing'}
            name='landing'
            active={activeItem === 'landing'}
            onClick={this.handleItemClick}
          >
            <Icon color={"black"} name={"table"}/>
            Table
          </Menu.Item>


          <Menu.Menu position='right'>
            <Menu.Item
              as={Link} to={'/stat'}
              name='stat'
              active={activeItem === 'stat'}
              onClick={this.handleItemClick}
            >
              <Icon color={"black"} name={"chart line"}/>
              Chart
            </Menu.Item>
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