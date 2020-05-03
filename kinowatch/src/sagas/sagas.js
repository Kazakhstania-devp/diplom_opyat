import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';

function* fetchInitialData() {
  try {
    const movies = yield call(Operation.fetchMovies);
    yield put(ActionCreator.setMovieList(movies));

  } catch (e) {}
}




export default function* sagaWatcher() {
  yield takeLatest(ActionType.FETCH_INITIAL_DATA, fetchInitialData);
}
