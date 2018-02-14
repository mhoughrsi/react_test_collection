import { combineReducers } from "redux";
import BasicReducer from "./reducer_basic";

const rootReducer = combineReducers({
  basicReducer: BasicReducer
});

export default rootReducer;