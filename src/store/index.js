import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import counter from "./counter.redux";
import user from "./user.redux";

export default createStore(combineReducers({ counter, user }), applyMiddleware(logger, thunk));