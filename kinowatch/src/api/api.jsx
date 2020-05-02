import axios, {AxiosInstance} from 'axios'; // eslint-disable-line

import {ApiEndpoint} from '../../config/api-endpoints';
import {StatusCode} from '../config/status-codes';
import {RouteConfig} from '../../config/routes';


export const createAPI = (onLoginFail = null) => {
  const api = axios.create({
    baseURL: ApiEndpoint.BASE_URL,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.request &&
      err.response.request.responseURL.indexOf(RouteConfig.SIGN_IN) === -1 &&
      err.response.status === StatusCode.FORBIDDEN) {
      if(onLoginFail) onLoginFail();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
