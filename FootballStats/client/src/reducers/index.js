import { combineReducers } from "redux";
import scorers from "./scorers";
import teams from "./teams";

// Create rootReducer
export default combineReducers({
  scorers,
  teams,
});
