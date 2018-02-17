
import { GET_COUNTRIES } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return [action.payload.data, ...state];
  }
  return state;
}