import { combineReducers } from "redux";
import stores from "./storeReducer";
import cities from "./cityReducer";
import streets from "./streetReducer";

const rootReducer = combineReducers({
  stores,
  cities,
  streets
});

export default rootReducer;
