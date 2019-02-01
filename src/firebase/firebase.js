import * as firebase from 'firebase';
import conf from '../config/conf';

// Initialize Firebase
const config = {
  apiKey: conf.apiKey,
  authDomain: conf.authDomain,
  databaseURL: conf.databaseURL,
  projectId: conf.projectId,
  storageBucket: conf.storageBucket,
  messagingSenderId: conf.messagingSenderId
};
firebase.initializeApp(config);

const db = firebase.database();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleProvider, storage, db as default};