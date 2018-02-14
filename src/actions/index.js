/*
 * action types
 */
import axios from 'axios';
export const FETCH_BASIC = 'FETCH_BASIC';

const URL = `https://jsonplaceholder.typicode.com/posts/1`;

export function fetchBasic() {
  var request = axios.get(URL);
  return {
    type: FETCH_BASIC, 
    payload: request 
  }
}