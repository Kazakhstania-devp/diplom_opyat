import {ActionCreator} from '../store/actions';
import {ApiEndpoint} from '../config/api-endpoints';
import {createAPI} from '../api/api';

const api = createAPI(() => history.push(RouteConfig.INDEX));

export const Operation = {
  fetchMovie: () => {
    return api.get(ApiEndpoint.GET_MOVIE)
  },
};
