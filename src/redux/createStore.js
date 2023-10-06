import logger from "redux-logger";
import rootReducer from "./rootReducer";
import createSagaMiddle from 'redux-saga';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./rootSaga";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

const reduxPersistor = {
  store,
  persistor
};

export default reduxPersistor
