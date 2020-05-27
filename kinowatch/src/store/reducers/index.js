import {ActionType} from '../action-types';

const initialState = {
    error: '',
    movieList: [],
    rubricList: [],
    newList: [],
    searchList: [],
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
    case ActionType.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload
      }
    case ActionType.SET_RUBRIC_LIST:
      return{
        ...state,
        rubricList: action.payload
      }
    case ActionType.SET_NEW_LIST:
      return{
        ...state,
        newList: action.payload
      }
    case ActionType.SEARCH_FILM:
      return{
        ...state,
        searchList: action.payload
      }
    
      
    default: return state;
  }
}