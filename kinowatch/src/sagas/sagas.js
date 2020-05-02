import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';

function* fetchInitialData() {
  try {
    const [profile, music] = yield all([call(Operation.fetchProfile), call(Operation.fetchMusic)]);

    yield all([
     
    ]);

  } catch (e) {}
}




export default function* sagaWatcher() {
  yield takeLatest(ActionType.FETCH_INITIAL_DATA, fetchInitialData);
}
