import {ActionType} from '../action-types';

const initialState = {
    error: '',
    movieList: [],
    animeList: [],
    newList: [],
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
    case ActionType.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload
      }
    case ActionType.SET_ANIME_LIST:
      return{
        ...state,
        animeList: action.payload
      }
    case ActionType.SET_NEW_LIST:
      return{
        ...state,
        newList: action.payload
      }
    default: return state;
  }
}