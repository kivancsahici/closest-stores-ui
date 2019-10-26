import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function cityReducer(state = initialState.cities, action) {
  switch (action.type) {
    case types.LOAD_CITIES_SUCCESS:
      return action.cities;
    default:
      return state;
  }
}
