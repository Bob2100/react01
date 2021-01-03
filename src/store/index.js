import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import countReducer from "./counter.redux";

export default createStore(countReducer, applyMiddleware(logger, thunk));