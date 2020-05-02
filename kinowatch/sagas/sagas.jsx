import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import {Operation} from '../api/operations';
import {ActionType} from '../store/action-types';
import {getPrevTrack, getNextTrack} from '../store/selectors';
import {ActionCreator} from '../store/actions';

function* fetchInitialData() {
  try {
    const [profile, music] = yield all([call(Operation.fetchProfile), call(Operation.fetchMusic)]);

    yield all([
      put(ActionCreator.setMyProfile(profile.data)),
      put(ActionCreator.setMyTracks(music.data.tracks)),
      put(ActionCreator.setCurrentTrack(music.data.tracks[0])),
      put(ActionCreator.setCurrentTracklist(music.data.tracks)),
      put(ActionCreator.setMyPlaylists(music.data.playlists)),
      put(ActionCreator.setIsLoaded(true)),
    ]);

  } catch (e) {}
}

function* setPrevTrackAsCurrent() {
  const prevTrack = yield select(getPrevTrack);
  yield put(ActionCreator.setCurrentTrack(prevTrack));
}

function* setNextTrackAsCurrent() {
  const nextTrack = yield select(getNextTrack);
  yield put(ActionCreator.setCurrentTrack(nextTrack));
}


export default function* sagaWatcher() {
  yield takeLatest(ActionType.FETCH_INITIAL_DATA, fetchInitialData);
  yield takeLatest(ActionType.CHANGE_TO_PREV_TRACK, setPrevTrackAsCurrent);
  yield takeLatest(ActionType.CHANGE_TO_NEXT_TRACK, setNextTrackAsCurrent);
}
