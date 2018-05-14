import todoService from '../services/todoService';
import { createActions } from '../helpers/actionHelper';

import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,

  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,

  UPDATE_TODO_ORDER,

  UPDATE_TODOS_REQUEST,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODOS_FAILURE
} from '../constants/actionTypes';

export const getTodos = () => {
  const createRequestAction = () => ({ type: GET_TODOS_REQUEST });
  const createSuccessAction = (todos) => ({ type: GET_TODOS_SUCCESS, todos });
  const createFailureAction = (error) => ({ type: GET_TODOS_FAILURE, error });

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, todoService.getTodos);
};

export const updateTodo = (oldTodo, newTodo) => {
  const createRequestAction = (oldTodo, newTodo) => ({ type: UPDATE_TODO_REQUEST, oldTodo, newTodo });
  const createSuccessAction = (updated) => ({ type: UPDATE_TODO_SUCCESS, updated });
  const createFailureAction = (error) => ({ type: UPDATE_TODO_FAILURE, error });

  return createActions({ createRequestAction, createSuccessAction, createFailureAction }, todoService.updateTodo, newTodo);
};

export const updateTodoOrder = (oldIndex, newIndex) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO_ORDER, oldIndex, newIndex })
  };
};
