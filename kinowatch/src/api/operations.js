import {ApiEndpoint} from '../config/api-endpoints';
import {ActionCreator} from '../store/actions';
import history from '../history';
import {createAPI} from './api';
import routeConfig from '../config/routes';

const api = createAPI(() => history.push(routeConfig.INDEX));


export const Operation = {
    fetchMovies: () => {
        return api.get(ApiEndpoint.GET_MOVIE_LIST)
      },
    fetchRubric: () => {
      return api.get(ApiEndpoint.GET_RUBRIC_LIST)
      },
    fetchNew: () => {
      return api.get(ApiEndpoint.GET_NEW_LIST)
      }  
};
