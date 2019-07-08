import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store';
import AppContainer from './AppContainer';
import {loadRecords} from '../actions/doctorActions';

store.dispatch(loadRecords());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
