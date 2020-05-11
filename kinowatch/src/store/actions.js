
import {ActionType} from './action-types';


export const ActionCreator = {
    setMovieList: (movies) => ({
        type: ActionType.SET_MOVIE_LIST,
        payload: movies
      }),
    setAnimeList: (anime) =>({
      type: ActionType.SET_ANIME_LIST,
      payload: anime
    }),
    setNewList: (newList) =>({
      type: ActionType.SET_NEW_LIST,
      payload: newList
    }),
};