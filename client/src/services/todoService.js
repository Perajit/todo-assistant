import { request } from '../helpers/requestHelper';

import { store } from '../store';

import {
  TODOS_ENDPOINT
} from '../constants/endpoints';

const getTodos = () => {
  const {
    auth: { user }
  } = store.getState();

  if (!user) {
    return Promise.resolve(null);
  }

  return request(`${TODOS_ENDPOINT}?userId=${user.sub}`)
    .then((json) => json.todos);
};

const updateTodo = (todo) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  };

  return request(`${TODOS_ENDPOINT}/${todo.id}?`, requestOptions)
    .then((json) => json.updatedTodo);
};

export default {
  getTodos,
  updateTodo
};
