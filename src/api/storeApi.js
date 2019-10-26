import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/stores/";

export function getStores() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCities() {
  return fetch("http://localhost:3001/acmeCities")
    .then(handleResponse)
    .catch(handleError);
}

export function getStreetsByCity(city) {
  return fetch("http://localhost:3001/acmeStores?city=" + city)
    .then(handleResponse)
    .catch(handleError);
}
