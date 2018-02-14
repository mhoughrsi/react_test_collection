
import { FETCH_BASIC } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BASIC:
      return [action.payload.data, ...state];
  }
  return state;
}