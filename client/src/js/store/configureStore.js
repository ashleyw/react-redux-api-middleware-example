import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import promise from 'redux-promise';
import reducer from '../reducers';

// const reducer = combineReducers(reducers);
// const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
