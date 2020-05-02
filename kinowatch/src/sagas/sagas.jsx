import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import {Operation} from '../src/api/operations';
import {ActionType} from '../store/action-types';

function* fetchInitialData() {
  try {
    const [profile, music] = yield all([call(Operation.fetchProfile), call(Operation.fetchMusic)]);

    yield all([
     
    ]);

  } catch (e) {}
}




export default function* sagaWatcher() {
  yield takeLatest(ActionType.FETCH_INITIAL_DATA, fetchInitialData);
  yield takeLatest(ActionType.CHANGE_TO_PREV_TRACK, setPrevTrackAsCurrent);
  yield takeLatest(ActionType.CHANGE_TO_NEXT_TRACK, setNextTrackAsCurrent);
}
