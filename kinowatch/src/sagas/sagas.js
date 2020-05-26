import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';

import {findMovieSelector} from '../store/selectors'


function* fetchInitialData() {
  try {
    const [movies, rubric, newList] = yield all([call(Operation.fetchMovies), call(Operation.fetchRubric), call(Operation.fetchNew)]);
    yield all([
      put(ActionCreator.setMovieList(movies.data)),
      put(ActionCreator.setRubricList(rubric.data)),
      put(ActionCreator.setNewList(newList.data)),
    ]);
  } catch (e) {}
}


function* setFindMoviesSaga(action) {
  const searchMovies = yield select(findMovieSelector,action);
  yield put(ActionCreator.setSearchList(searchMovies));
}

export default function* sagaWatcher() {
  yield all([
    takeLatest(ActionType.FETCH_INITIAL_DATA, fetchInitialData),
    takeLatest(ActionType.SEARCH_FILM, setFindMoviesSaga)
      ]);
}
