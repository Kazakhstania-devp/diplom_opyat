import {ActionType} from '../action-types';
import {createStore, applyMiddleware, compose} from 'redux';

const composeEnhancers = typeof window === 'undefined'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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