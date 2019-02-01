import {SET_TEXT_FILTER, SET_START_DATE, SET_END_DATE, SORT_BY_PRICE, SORT_BY_DATE, SORT_BY_QTY_IN, SORT_BY_QTY_SOLD} from '../actions/constants';

// set default state for filter reducer.

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: new Date(),
  endDate: new Date()
}


const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch(action.type){
    case SET_TEXT_FILTER:
      return {...state, text:action.text}
    case SORT_BY_DATE:
      return {...state, sortBy: 'date'}
    case SORT_BY_PRICE:
      return {...state, sortBy: 'price'}
    case SORT_BY_QTY_IN:
      return {...state, sortBy: 'qtyIn'}
    case SORT_BY_QTY_SOLD:
      return {...state, sortBy: 'qtySold'}
    case SET_START_DATE:
      return {...state, startDate: action.startDate}
    case SET_END_DATE:
      return {...state, endDate: action.endDate}
    default:
      return state;
  }
}

export default filtersReducer;