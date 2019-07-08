import * as types from './actionTypes';
import DataApi from '../../server/DataApi';

export function loadRecordsSuccess(doctors) {
  return {
    type: types.LOAD_RECORDS_SUCCESS,
    doctors
  };
}

export function loadRecords() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response => dispatch(loadRecordsSuccess(response))
    ).catch(error => {
      throw(error);
    });
  };
}
