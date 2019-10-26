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

export function loadCities() {
  return function(dispatch) {
    return storeApi
      .getCities()
      .then(cities => {
        dispatch(loadCitiesSuccess(cities));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadStreets(city) {
  return function(dispatch) {
    return storeApi
      .getStreetsByCity(city)
      .then(streets => {
        dispatch(loadStreetsSuccess(streets));
      })
      .catch(error => {
        throw error;
      });
  };
}
