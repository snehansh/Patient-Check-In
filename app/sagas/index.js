import { takeEvery, call, put } from 'redux-saga/effects';

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json());
}

function* workerSaga() {
    const payload = yield call(getData);
    yield put({type: 'LOAD_RECORDS_SUCCESS', payload});
}

export default function* watcherSaga() {
   yield takeEvery('LOAD_RECORDS', workerSaga);
}