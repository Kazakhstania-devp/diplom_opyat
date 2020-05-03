import {ActionType} from '../action-types';

const initialState = {
    error: '',
    movieList: [],
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
    case ActionType.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload
      }
    default: return state;
  }
}