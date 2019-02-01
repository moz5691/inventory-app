import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import storeConfig from './store/storeConfig';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';
import 'semantic-ui-css/semantic.min.css';
import App, {history} from './App';

import * as serviceWorker from './serviceWorker';
import {asyncGetInventory} from "./actions/inventories";
import Loading from './components/Loading'

const store = storeConfig();


let wasRendered = false;


// we want to render one time.. if already rendered, don't render App.
const runApp = () =>{
  if(!wasRendered){
    ReactDOM.render(
      <Provider store={store}><App /></Provider>
      ,document.getElementById('root'));
    wasRendered = true;
  }
}

// loading first ....
ReactDOM.render(
  <Loading/>
  ,document.getElementById('root'));


firebase.auth().onAuthStateChanged( async (user)  => {
  if(user){
    try {
      await store.dispatch(login(user.uid));
      await store.dispatch(asyncGetInventory());
      runApp();
      if(history.location.pathname ==='/'){
        history.push('/home');
     }
    } catch (err) {
      console.log(err);
    }
  } else {
    store.dispatch(logout());
    runApp();
    history.push('/');
    console.log("logout");
  }
})


serviceWorker.unregister();
