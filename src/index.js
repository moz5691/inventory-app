import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import storeConfig from './store/storeConfig';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {asyncGetInventory} from "./actions/inventories";

const store = storeConfig();


// store.dispatch(addInventory({description:"plain bento set", note:"plan one"}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('root'));

firebase.auth().onAuthStateChanged( async (user)  => {
  if(user){
    try {
      await store.dispatch(login(user.uid));
      console.log("login", user.uid);
      await store.dispatch(asyncGetInventory())
    } catch (err) {
      console.log(err);
    }
  } else {
    store.dispatch(logout());
    console.log("logout");
  }
})



serviceWorker.unregister();
