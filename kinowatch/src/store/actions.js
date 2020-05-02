
import {ActionType} from './action-types';


export const ActionCreator = {
    setMovieList: (movies) => ({
        type: ActionType.SET_MOVIE_LIST,
        payload: movies
      })
};
