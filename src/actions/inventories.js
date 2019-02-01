import db from '../firebase/firebase'
import {ADD_INVENTORY, REMOVE_INVENTORY, EDIT_INVENTORY, GET_INVENTORY}  from './constants';

export const addInventory = (inventory) => (
  {
    type: ADD_INVENTORY,
    inventory
  }
)

export const removeInventory = ({id}={}) => (
  {
    type: REMOVE_INVENTORY,
    id
  }
)

export const editInventory = (id, updates) => (
  {
    type: EDIT_INVENTORY,
    id,
    updates
  }
)

export const getInventory = (inventories) => (
  {
    type: GET_INVENTORY,
    inventories
  }
)



export const asyncAddInventory = (inventoryData = {}) => {
  return async (dispatch) => {
    try {
      const {
        sku = "",
        title = '',
        description = "",
        entryDate = 0,
        itemPrice = 0,
        qtyIn = 0,
        qtySold = 0,
        photoLink = "",
        note = ""
      } = inventoryData;
      const inventory = {sku, description, title, qtySold, qtyIn, itemPrice, photoLink, entryDate, note};
      const ref = await db.ref(`inventories`).push(inventory);
      dispatch(addInventory({id: ref.key, ...inventory}));
    } catch (err){
      console.log(err);
      // TODO add error handler her, like dispatch(errorHandle(err))
    }
  }
}

export const asyncGetInventory = () => {
  return async (dispatch) => {
   try{
     const inventories = [];
     const snapshot = await db.ref('inventories').once('value');
     snapshot.forEach(child =>
     { inventories.push({id: child.key, ...child.val()}) } );
     dispatch(getInventory(inventories));
   }
   catch (err) {
     console.log(err);
     // TODO add error handler her, like dispatch(errorHandle(err))
   }
  }
}

export const asyncEditInventory = (id, updates) => {
  return async (dispatch) => {
    try {
      await db.ref(`inventories/${id}`).update(updates);
      dispatch(editInventory(id, updates));
    }
    catch (err) {
      console.log(err);
      // TODO add error handler her, like dispatch(errorHandle(err))
    }
  }
}

export const asyncRemoveInventory = ({id}={}) => {
  return async (dispatch) => {
    try {
      await db.ref(`inventories/${id}`).remove();
      dispatch(removeInventory({id}));
      console.log('delete', id);
    }
    catch (err) {
      console.log(err);
      // TODO add error handler her, like dispatch(errorHandle(err))
    }
  }
}