import Namespace from './reducers/name-space';
import {createSelector} from 'reselect';

const USER = Namespace.USER;
const MUSIC = Namespace.MUSIC;
const PLAYER = Namespace.PLAYER;

export const getIsLoaded = (state) => state[MUSIC].isLoaded;

export const getMyProfile = (state) => state[USER].myProfile;
export const getFriendList = (state) => state[USER].myProfile.friends;

export const getMyTracks = (state) => state[MUSIC].myTracks;
export const getMyPlaylists = (state) => state[MUSIC].myPlaylists;

export const getPlaylists = (state) => state[MUSIC].playlists;

export const getCurrentTrack = (state) => state[PLAYER].currentTrack;
export const getCurrentTrackList = (state) => state[PLAYER].currentTrackList;
export const getIsPlaying = (state) => state[PLAYER].isPlaying;
export const getProgress = (state) => state[PLAYER].progress;

export const getPrevTrack =(state) => {
  const tracks = getCurrentTrackList(state);
  const currentTrack = getCurrentTrack(state);

  const i = tracks.indexOf(currentTrack);

  return tracks[i-1] || tracks[tracks.length - 1];
};

export const getNextTrack = (state) => {
  const tracks = getCurrentTrackList(state);
  const currentTrack = getCurrentTrack(state);

  const i = tracks.indexOf(currentTrack);

  return tracks[i+1] || tracks[0];
};

export const getPlaylist = createSelector(
  getPlaylists, (state, id, ownerId) => id,
  (playlists, id) => {
    return playlists.filter((playlist) => playlist.id == id)[0] || -1;
  }
);
