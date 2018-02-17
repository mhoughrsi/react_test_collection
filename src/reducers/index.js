import { combineReducers } from "redux";
import BasicReducer from "./reducer_basic";
import CountryReducer from "./reducer_countries";

const rootReducer = combineReducers({
  basicReducer: BasicReducer,
  countryReducer: CountryReducer
});

export default rootReducer;