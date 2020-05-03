import {ActionType} from '../action-types';

const initialState = {
    error: '',
    movieList: [],
};

export default function appReducer(state = initialState, action) {
  console.log(state);
    switch (action.type) {
    case ActionType.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movies
      }
    default: return state;
  }
}