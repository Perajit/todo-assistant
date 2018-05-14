import { request } from '../helpers/requestHelper';

import {
  AUTH_ENDPOINT
} from '../constants/endpoints';

const getCurrentUser = () => {
  const user = sessionStorage.getItem('currentUser');

  return JSON.parse(user);
};

const setCurrentUser = (user) => {
  sessionStorage.setItem('currentUser', JSON.stringify(user));
};

const getAuthUser = (code) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code })
  };

  return request(`${AUTH_ENDPOINT}/verify`, requestOptions)
    .then((json) => json.user);
};

export default {
  getCurrentUser,
  setCurrentUser,
  getAuthUser
};
