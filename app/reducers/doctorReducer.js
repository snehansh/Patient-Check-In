import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function doctorReducer(state = initialState.doctors, action) {
  switch (action.type) {
    case types.LOAD_RECORDS_SUCCESS:
      return action.doctors;
    default:
  }
}
