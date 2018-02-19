/*
 * action types
 */
import axios from 'axios';
export const FETCH_BASIC = 'FETCH_BASIC';
export const GET_USERS = 'GET_USERS';

const URL = `https://data.cityofchicago.org/resource/ydr8-5enu.json?`;

export function fetchBasic() {
  var request = axios.get(URL);
  return {
    type: FETCH_BASIC, 
    payload: request 
  }
}

export function getUsers() {
  var request = axios.get(`https://randomuser.me/api/?results=1000`);
  return {
    type: GET_USERS,
    payload: request
  }
}