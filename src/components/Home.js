import React, {Component} from 'react';
import SearchForm from './form/SearchForm';
import {Button} from 'semantic-ui-react';

class Home extends Component {

  onClick = () => {
    this.props.history.push('/landing');
  }

  render() {
    return (
      <div>
        <SearchForm/>
        <Button onClick={this.onClick} color={"green"}>Submit</Button>
      </div>
    );
  }
}

export default Home;