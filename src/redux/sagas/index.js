import { put, takeLatest, all } from "redux-saga/effects";

function* loadCities() {
  yield put({
    type: "LOAD_CITIES_BEGIN"
  });

  const cities = yield fetch(
    "https://closest-stores.herokuapp.com/geoapi/v1/cities"
  ).then(response => response.json());

  yield put({
    type: "LOAD_CITIES_END"
  });

  yield put({
    type: "LOAD_CITIES_SUCCESS",
    cities: cities
  });
}

function* loadStreets(action) {
  const streets = yield fetch(
    "https://closest-stores.herokuapp.com/geoapi/v1/cities/" + action.city
  ).then(response => response.json());

  yield put({
    type: "LOAD_STREETS_SUCCESS",
    streets: streets
  });
}

function* loadStores() {
  const stores = yield fetch("http://localhost:3001/stores/").then(response =>
    response.json()
  );

  yield put({
    type: "LOAD_STORES_SUCCESS",
    stores: stores
  });
}

function* actionWatcher() {
  yield takeLatest("LOAD_CITIES", loadCities);
}

function* actionWatcher2() {
  yield takeLatest("LOAD_STREETS", loadStreets);
}

function* actionWatcher3() {
  yield takeLatest("LOAD_STORES", loadStores);
}

export default function* rootSaga() {
  yield all([actionWatcher(), actionWatcher2(), actionWatcher3()]);
}
