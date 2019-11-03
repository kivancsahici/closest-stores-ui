import * as types from "./actionTypes";
import * as storeApi from "../../api/storeApi";

export function loadStoresSuccess(stores) {
  return { type: types.LOAD_STORES_SUCCESS, stores };
}

export function loadCitiesSuccess(cities) {
  return { type: types.LOAD_CITIES_SUCCESS, cities };
}

export function loadStreetsSuccess(streets) {
  return { type: types.LOAD_STREETS_SUCCESS, streets };
}

export function loadCities() {
  return { type: types.LOAD_CITIES };
}

export function loadStreets(city) {
  return { type: types.LOAD_STREETS, city };
}

export function loadStores() {
  return { type: types.LOAD_STORES };
}
