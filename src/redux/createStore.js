import logger from "redux-logger";
import rootReducer from "./rootReducer";
import createSagaMiddle from 'redux-saga';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
