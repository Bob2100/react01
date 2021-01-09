import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import counter from "./counter.redux";
import user from "./user.redux";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

// 创建中间件
const mid = createSagaMiddleware();
// 应用中间件
const store = createStore(combineReducers({ counter, user }), applyMiddleware(logger, mid));
mid.run(saga);

export default store;