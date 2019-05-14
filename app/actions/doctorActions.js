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
    return DataApi.getList().then(doctors => {
      loadRecordsSuccess(doctors);
    }).catch(error => {
      throw(error);
    });
  };
}
