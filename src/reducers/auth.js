import {LOGIN, LOGOUT} from "../actions/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      console.log("reducer login")
      return {
        uid: action.uid
      };
    case LOGOUT:
      console.log("reducer logout")
      return {};
    default:
      return state;
  }
}