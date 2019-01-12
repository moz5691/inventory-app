import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";
import {Button} from 'semantic-ui-react'

const LoginPage = (props) => {
  return (
    <div>
        <h1>Login Page</h1>
      <Button onClick={props.startLogin} color={"blue"}>Login</Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    startLogin: ()=>dispatch(startLogin())
  }
)

export default connect(null,mapDispatchToProps)(LoginPage);