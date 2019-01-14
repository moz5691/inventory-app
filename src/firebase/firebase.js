import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDmje-EVNvRkvGei7lXVm8gWNjjsNtlRNc",
  authDomain: "inventory-a8be8.firebaseapp.com",
  databaseURL: "https://inventory-a8be8.firebaseio.com",
  projectId: "inventory-a8be8",
  storageBucket: "inventory-a8be8.appspot.com",
  messagingSenderId: "1004312960483"
};
firebase.initializeApp(config);

const db = firebase.database();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleProvider, storage, db as default};