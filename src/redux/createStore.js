import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { createStoreHook } from 'react-redux';
import { applyMiddleware } from 'redux';

export const middlewares = [logger];

export const store = createStoreHook(rootReducer, applyMiddleware(...middlewares));

export default store;