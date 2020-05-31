import {ActionType} from '../action-types';

// Дефолтное состояние
const initialState = {
    error: '',
    movieList: [],
    rubricList: [],
    newList: [],
    searchList: [],
};
// Редьюсер изначально принимает в стор дефолтное состояние(выше), а после выполнения экшена возвращает данные
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