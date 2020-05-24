import {ActionType} from './action-types';


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
};
