import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

import custom_middleware from './middleware/index';

const create_store = function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(custom_middleware)
  );
}

const store = create_store(); 

export default store;