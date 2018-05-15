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
      return _(action.todos)
        .map((todo) => Object.assign({}, todo, { important: !!todo.important }))
        .orderBy(['important','time'], ['desc', 'desc'])
        .value();

    case UPDATE_TODO_SUCCESS:
      const { updated } = action;
      const index = state.findIndex((item) => item.id === updated.id);
      const oldTodo = state[index];
      const newTodo = Object.assign({}, oldTodo, updated);
      const headTodos = state.slice(0, index);
      const tailTodos = state.slice(index + 1);

      if (newTodo.important === oldTodo.important) {
        return headTodos.concat(newTodo).concat(tailTodos);
      }

      const otherTodos =headTodos.concat(tailTodos);
      const groups = _.groupBy(otherTodos, (newTodo) => !!newTodo.important);

      if (newTodo.important) {
        return _.orderBy(groups[true].concat(newTodo), 'time').concat(groups[false]);
      }
      else {
        return groups[true].concat(newTodo).concat(groups[false]);
      }

    case UPDATE_TODO_ORDER:
      const { oldIndex, newIndex } = action;
      return arrayMove(state, oldIndex, newIndex);

    default:
      return state;
  }
}

export default todosReducer;
