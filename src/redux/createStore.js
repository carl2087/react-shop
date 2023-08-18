import logger from "redux-logger";
import rootReducer from "./rootReducer";

import { createStore, applyMiddleware } from "redux";

export const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
