import { request } from '../helpers/requestHelper';

import {
  LOGIN_ENDPOINT,
  AUTH_ENDPOINT
} from '../constants/endpoints';

const CLIENT_ID = '1580404888';

const getLoginUrl = () => {
  const redirect_uri = location.origin;
  const state = Math.random().toString(36).substr(2); // Generate random alphanumeric

  return `${LOGIN_ENDPOINT}?response_type=code&scope=openid%20profile&client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&state=${state}`;
};

const getCurrentUser = () => {
  const user = sessionStorage.getItem('currentUser');

  return JSON.parse(user);
};

const setCurrentUser = (user) => {
  sessionStorage.setItem('currentUser', JSON.stringify(user));
};

const getAuthUser = (authCode) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: authCode,
      redirect_uri: location.origin,
      client_id: CLIENT_ID
    })
  };

  return request(AUTH_ENDPOINT, requestOptions)
    .then((json) => json.user);
};

export default {
  getLoginUrl,
  getCurrentUser,
  setCurrentUser,
  getAuthUser
};
