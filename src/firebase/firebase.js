import * as firebase from 'firebase';
import googleConf from '../config/googleConf';

// Initialize Firebase
const config = {
  apiKey: googleConf.apiKey,
  authDomain: googleConf.authDomain,
  databaseURL: googleConf.databaseURL,
  projectId: googleConf.projectId,
  storageBucket: googleConf.storageBucket,
  messagingSenderId: googleConf.messagingSenderId
};
firebase.initializeApp(config);

const db = firebase.database();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleProvider, storage, db as default};