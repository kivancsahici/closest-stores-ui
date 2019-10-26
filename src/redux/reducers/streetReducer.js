import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function streetReducer(state = initialState.streets, action) {
  switch (action.type) {
    case types.LOAD_STREETS_SUCCESS:
      return action.streets;
    default:
      return state;
  }
}
