
import { GET_USERS } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return [action.payload.data, ...state];
  }
  return state;
}