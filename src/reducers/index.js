import counterReducer from "./counter";
import isStarted from "./isStarted";
import isPrepared from "./isPrepared";
import doAgain from "./doAgain";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isStarted,
  isPrepared,
  doAgain
})

export default allReducers;