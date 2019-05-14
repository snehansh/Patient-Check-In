import {combineReducers} from 'redux';
import doctors from './doctorReducer';

const rootReducer = combineReducers({
  doctors,
});

export default rootReducer;
