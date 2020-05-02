import {Action} from 'redux'; // eslint-disable-line

import {ActionType} from './action-types';
import {Profile, Track, PlaylistPreview, Playlist} from '../types'; // eslint-disable-line

export interface GenericAction extends Action<string> {
  payload?: any
}

export const ActionCreator = {
  setIsLoaded: (flag: boolean) => ({
    type: ActionType.SET_IS_LOADED,
    payload: flag
  }),
  setMyProfile: (profile: Profile) => ({
    type: ActionType.SET_MY_PROFILE,
    payload: profile
  }),
  setMyTracks: (tracks: Array<Track>) => ({
    type: ActionType.SET_MY_TRACKS,
    payload: tracks
  }),
  setMyPlaylists: (playlists: Array<PlaylistPreview>) => ({
    type: ActionType.SET_MY_PLAYLISTS,
    payload: playlists
  }),
  setCurrentTrack: (track: Track) => ({
    type: ActionType.SET_CURRENT_TRACK,
    payload: track
  }),
  setCurrentTracklist: (tracks: Array<Track>) => ({
    type: ActionType.SET_CURRENT_TRACKLIST,
    payload: tracks
  }),
  setIsPlaying: (isPlaying: boolean) => ({
    type: ActionType.SET_IS_PLAYNING,
    payload: isPlaying
  }),
  setProgress: (progress: number) => ({
    type: ActionType.SET_PROGRESS,
    payload: progress
  }),
  setIsShuffle: (isShuffle: boolean) => ({
    type: ActionType.SET_IS_SHUFFLE,
    isShuffle: isShuffle
  }),
};
