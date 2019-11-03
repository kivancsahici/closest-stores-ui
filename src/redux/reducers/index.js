import { combineReducers } from "redux";
import stores from "./storeReducer";
import cities from "./cityReducer";
import streets from "./streetReducer";
import apiCallActive from "./apiCallActive";

const rootReducer = combineReducers({
  stores,
  cities,
  streets,
  apiCallActive
});

export default rootReducer;
