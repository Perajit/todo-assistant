import authService from '../services/authService';

import {
  GET_AUTH_USER_REQUEST,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_FAILURE
} from '../constants/actionTypes';

const initialState = {
  error: null,
  user: authService.getCurrentUser(),
  waiting: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_USER_REQUEST:
      return {
        error: null,
        user: null,
        waiting: true
      };

    case GET_AUTH_USER_SUCCESS:
      return {
        error: null,
        user: action.user,
        waiting: false
      };

    case GET_AUTH_USER_FAILURE:
      return {
        error: action.error,
        user: null,
        waiting: false
      };

    default:
      return state;
  }
}

export default userReducer;
