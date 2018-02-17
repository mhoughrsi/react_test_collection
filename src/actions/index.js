/*
 * action types
 */
import axios from 'axios';
export const FETCH_BASIC = 'FETCH_BASIC';
export const GET_COUNTRIES = 'GET_COUNTRIES';

const URL = `https://data.cityofchicago.org/resource/ydr8-5enu.json?`;

export function fetchBasic() {
  var request = axios.get(URL);
  return {
    type: FETCH_BASIC, 
    payload: request 
  }
}

export function getCountries() {
  var request = axios.get(``);
  return {
    type: GET_COUNTRIES,
    payload: request
  }
}