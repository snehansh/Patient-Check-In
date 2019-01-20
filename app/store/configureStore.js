import { createStore, applyMiddleware, compose } from 'redux';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState = {}) {

  const enhancers = [
    devtools()
  ];

  return createStore(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
