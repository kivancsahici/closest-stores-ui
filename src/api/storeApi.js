import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/stores/";

export function getStores() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
