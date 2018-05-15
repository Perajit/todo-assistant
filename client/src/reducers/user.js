import authService from '../services/authService';

import {
  GET_CURRENT_USER,
  GET_AUTH_USER_SUCCESS
} from '../constants/actionTypes';

const initialState = authService.getCurrentUser();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
    case GET_AUTH_USER_SUCCESS:
      return action.user;

    default:
      return state;
  }
}

export default userReducer;
