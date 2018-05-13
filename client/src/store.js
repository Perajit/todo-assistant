import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  return createStore(rootReducer, applyMiddleware(...middlewares));
}

export const store = configureStore();
