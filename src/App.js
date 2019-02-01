import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import Home from './components/Home';
import AddPage from './components/AddPage';
import EditPage from './components/EditPage';
import Landing from './components/Landing';
import Page404 from './components/Page404';
import StatPage from './components/StatPage';
import LoginPage from './components/LoginPage';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';



import About from './components/About';

export const history = createHistory();

const App = () => {

    return (
      <Router history={history}>
      <div className="App">
        <Switch >
          <PublicRoute exact path={'/'} component={LoginPage}/>
          <PrivateRoute path={'/home'} component={Home}/>
          <PrivateRoute path={'/add'} component={AddPage}/>
          <PrivateRoute path={'/edit/:id'} component={EditPage}/>
          <PrivateRoute path={'/stat'} component={StatPage}/>
          <PrivateRoute path={'/landing'} component={Landing}/>
          <Route path={'/About'} component={About}/>
          <Route path={'*'} component={Page404}/>
        </Switch>
      </div>
      </Router>
    )

}

export default App;
