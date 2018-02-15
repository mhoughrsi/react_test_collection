/*
 * action types
 */
import axios from 'axios';
export const FETCH_BASIC = 'FETCH_BASIC';

const URL = `https://data.cityofchicago.org/resource/ydr8-5enu.json?`;

export function fetchBasic() {
  var request = axios.get(URL);
  return {
    type: FETCH_BASIC, 
    payload: request 
  }
}