import {ActionType} from './action-types';

// Передача данных в стор 
export const ActionCreator = {
    setMovieList: (movies) => ({
        type: ActionType.SET_MOVIE_LIST,
        payload: movies
      }),
    setRubricList: (rubric) =>({
      type: ActionType.SET_RUBRIC_LIST,
      payload: rubric
    }),
    setNewList: (newList) =>({
      type: ActionType.SET_NEW_LIST,
      payload: newList
    }),
    setSearchList: (searchList) =>({
      type: ActionType.SEARCH_FILM,
      payload: searchList
    }),
    findMovies: (searchQuery) =>({
      type: ActionType.FIND_MOVIE,
      payload: searchQuery,
    }),
};
