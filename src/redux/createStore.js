import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

export const middlewares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
