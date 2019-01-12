import {ADD_INVENTORY, GET_INVENTORY, EDIT_INVENTORY, REMOVE_INVENTORY} from "../actions/constants";

const defaultInventoryState = [];

const inventoryReducer = ( state = defaultInventoryState, action) => {

  switch(action.type){
    case ADD_INVENTORY:
      return [...state, action.inventory]
    case GET_INVENTORY:
      return action.inventories
    case EDIT_INVENTORY:
      return state.map(inventory =>{
        if(inventory.id === action.id){
          return {...inventory, ...action.updates}
        }
        return inventory;
      })
    case REMOVE_INVENTORY:
      return state.filter(({id}) => id !== action.id)
    default:
      return state;
  }

}

export default inventoryReducer;