import {ApiEndpoint} from '../config/api-endpoints';
import {ActionCreator} from '../store/actions';
import {createAPI} from './api';
import history from '../history';

const api = createAPI(() => history.push(RouteConfig.INDEX));

export const Operation = {
  fetchMovie: () => {
    return api.get(ApiEndpoint.GET_MOVIE)
  }
};
