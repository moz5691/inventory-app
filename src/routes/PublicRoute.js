import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


const PublicRoutes = (props) => {
  const {isAuthenticated, component:Component, ...rest} = props;
  return (
    <Route {...rest} component={(props)=>(
      isAuthenticated ? (
        <Redirect to={"/home"}/>
      ) : <Component {...props}/>
    )}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps, null)(PublicRoutes);