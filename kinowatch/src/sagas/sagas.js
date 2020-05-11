import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';

function* fetchInitialData() {
  try {
    const [movies, anime, newList] = yield all([call(Operation.fetchMovies), call(Operation.fetchAnime), call(Operation.fetchNew)]);
    yield all([
      put(ActionCreator.setMovieList(movies.data)),
      put(ActionCreator.setAnimeList(anime.data)),
      put(ActionCreator.setNewList(newList.data)),
    ]);
  } catch (e) {}
}




export default function* sagaWatcher() {
  yield takeLatest(ActionType.FETCH_INITIAL_DATA, fetchInitialData);
}
