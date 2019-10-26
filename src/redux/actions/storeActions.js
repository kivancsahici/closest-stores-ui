import * as types from "./actionTypes";
import * as storeApi from "../../api/storeApi";

export function loadStoresSuccess(stores) {
  return { type: types.LOAD_STORES_SUCCESS, stores };
}

export function loadStores() {
  return function(dispatch) {
    return storeApi
      .getStores()
      .then(stores => {
        dispatch(loadStoresSuccess(stores));
      })
      .catch(error => {
        throw error;
      });
  };
}
