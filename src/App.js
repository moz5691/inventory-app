import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
// import Home from './components/Home';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';
import Landing from './components/Landing';
import Page404 from './components/Page404';
import StatPage from './components/StatPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path={'/'} component={LoginPage}/>
          <Route exact path={'/home'} component={Home}/>
          <Route path={'/add'} component={AddPage}/>
          {/*<Route path={'/edit'} component={EditPage}/>*/}
          <Route path={'/edit/:id'} component={EditPage}/>
          <Route path={'/stat'} component={StatPage}/>
          <Route path={'/landing'} component={Landing}/>
          <Route path={'/About'} component={About}/>
          <Route path={'*'} component={Page404}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
