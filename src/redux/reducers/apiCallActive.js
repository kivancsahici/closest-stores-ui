import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCall(state = initialState.apiCallActive, action) {
  switch (action.type) {
    case types.LOAD_CITIES_BEGIN:
      return true;
    case types.LOAD_CITIES_END:
      return false;
    default:
      return state;
  }
}
