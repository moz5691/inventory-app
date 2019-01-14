import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Navigation from '../components/Navigation'

const PrivateRoute = (props) => {
  const {isAuthenticated, component:Component, ...rest} = props;
  return (
    <Route {...rest} component={(props)=>(
      isAuthenticated ? (
        <div>
          <Navigation/>
          <Component {...props}/></div>
      ) : ( <Redirect to={"/"}/>)
    )}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps, null)(PrivateRoute);