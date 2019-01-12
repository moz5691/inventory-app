import {SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_PRICE, SET_START_DATE, SET_END_DATE, SORT_BY_QTY_IN, SORT_BY_QTY_SOLD} from './constants'


export const setTextFilter = (text="") =>({
  type: SET_TEXT_FILTER,
  text
})

export const sortByDate = () =>(
  {
    type: SORT_BY_DATE
  }
)

export const sortByPrice = () => ({
  type: SORT_BY_PRICE
})

export const setStartDate = (startDate) =>(
  {
    type: SET_START_DATE,
    startDate
  }
)

export const setEndDate = (endDate) =>(
  {
    type: SET_END_DATE,
    endDate
  }
)

export const sortByQtyIn = () => (
  {
    type: SORT_BY_QTY_IN
  }
)

export const sortByQtySold= () => (
  {
    type: SORT_BY_QTY_SOLD
  }
)