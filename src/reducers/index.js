import { combineReducers } from "redux";
import BasicReducer from "./reducer_basic";
import UserReducer from "./reducer_users";

const rootReducer = combineReducers({
  basicReducer: BasicReducer,
  userReducer: UserReducer
});

export default rootReducer;