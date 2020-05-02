import {ActionType} from '../../action-types';

import {Track} from '../../../types';
import { number } from 'prop-types';

interface DataState {
  readonly currentTrackList: Array<Track> | null,
  readonly currentTrack: Track,
  readonly progress: number,
  readonly bufferProgress: number,
  readonly isPlaying: boolean,
  readonly isShuffle: boolean,
}

const initialState: DataState = {
  currentTrack: null,
  currentTrackList: [],
  progress: 0,
  bufferProgress: 0,
  isPlaying: false,
  isShuffle: false,
};

export const playerReducer = (state: DataState = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_TRACKLIST:
      return {
        ...state,
        currentTrackList: action.payload
      };
    case ActionType.SET_CURRENT_TRACK:
      const prevCurrentTrack = state.currentTrack;
      const currentTrack = action.payload;

      if(prevCurrentTrack) prevCurrentTrack.isPlaying = false;
      currentTrack.isPlaying = true;
      return {
        ...state,
        currentTrack: currentTrack
      };
    case ActionType.SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case ActionType.SET_BUFFER_TIME:
      return {
        ...state,
        bufferProgress: action.payload,
      };
    case ActionType.SET_IS_PLAYNING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    case ActionType.SET_IS_SHUFFLE:
      return {
        ...state,
        isShuffle: action.payload
      }
    default: return state;
  }
};
