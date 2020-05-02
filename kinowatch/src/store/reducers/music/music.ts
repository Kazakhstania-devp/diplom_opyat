import {ActionType} from '../../action-types';

import {Track, Playlist, PlaylistPreview} from '../../../types';

interface DataState {
  readonly myTracks: Array<Track>,
  readonly trackList: Array<Track>,
  readonly myPlaylists: Array<PlaylistPreview>,
  readonly playlists: Array<Playlist>,
  readonly isLoaded: boolean,
}

const initialState: DataState = {
  myTracks: [],
  trackList: [],
  myPlaylists: [],
  playlists: [],
  isLoaded: false,
};

export const musicReducer = (state: DataState = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ActionType.SET_MY_TRACKS:
      return {
        ...state,
        myTracks: action.payload,
      };
    case ActionType.SET_MY_PLAYLISTS:
      return {
        ...state,
        myPlaylists: action.payload,
      };
    case ActionType.ADD_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists, action.payload]
      }
    default: return state;
  }
};
