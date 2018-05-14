import authService from '../services/authService';
import { createActions } from '../helpers/actionHelper';

import {
  SET_CURRENT_USER,

  GET_AUTH_USER_REQUEST,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_FAILURE
} from '../constants/actionTypes';

export const setCurrentUser = (user) => {
  authService.setCurrentUser(user);

  return (dispatch) => {
    dispatch({ type: SET_CURRENT_USER, user });
  };
};

export const getAuthUser = (authCode) => {
  const createRequestAction = (authCode) => ({ type: GET_AUTH_USER_REQUEST, authCode });
  const createSuccessAction = (user) => ({ type: GET_AUTH_USER_SUCCESS, user });
  const createFailureAction = (error) => ({ type: GET_AUTH_USER_FAILURE, error });

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, authService.getAuthUser, authCode);
};
