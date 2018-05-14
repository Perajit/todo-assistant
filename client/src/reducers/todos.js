import { arrayMove } from 'react-sortable-hoc';
import _ from 'lodash';

import {
  GET_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ORDER
} from '../constants/actionTypes';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return _.orderBy(action.todos, ['important','datetime'], ['desc', 'desc']);

    case UPDATE_TODO_SUCCESS:
      const { todo } = action;
      const index = state.findIndex((item) => item.id === todo.id);
      const oldTodo = state[index];
      const headTodos = state.slice(0, index);
      const tailTodos = state.slice(index + 1);

      if (todo.important === oldTodo.important) {
        return headTodos.concat(todo).concat(tailTodos);
      }

      const otherTodos =headTodos.concat(tailTodos);
      const groups = _.groupBy(otherTodos, (todo) => !!todo.important);

      if (todo.important) {
        return _.orderBy(groups[true].concat(todo), 'datetime').concat(groups[false]);
      }
      else {
        return groups[true].concat(todo).concat(groups[false]);
      }

    case UPDATE_TODO_ORDER:
      const { oldIndex, newIndex } = action;
      return arrayMove(state, oldIndex, newIndex);

    default:
      return state;
  }
}

export default todosReducer;
