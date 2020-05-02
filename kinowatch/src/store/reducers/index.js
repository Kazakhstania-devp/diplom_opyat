import {ActionType} from '../action-types';

const initialState = {
    error: '',
    movieList: [],
};

export default function appReducer(state, action) {
    switch (action.type) {
    case ActionType.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movies
      }
    default: return state;
  }
}