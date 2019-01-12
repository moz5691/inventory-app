import {firebase, googleProvider} from '../firebase/firebase'
import {LOGIN, LOGOUT} from './constants';

export const login = (uid) => ({
  type: LOGIN,
  uid
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleProvider);
  }
}

export const logout = () => ({
  type: LOGOUT
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}