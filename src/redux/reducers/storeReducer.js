import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function storeReducer(
  state = { stores: initialState.stores, highlight: "" },
  action
) {
  switch (action.type) {
    case types.FIND_STORES:
      return state;
    case types.LOAD_STORES_SUCCESS:
      return action.stores;
    default:
      return state;
  }
}
