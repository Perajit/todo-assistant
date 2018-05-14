import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoListPage from './TodoListPage';

import { store } from '../store';

describe('<TodoListPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render((
      <Provider store={ store }>
        <TodoListPage />
      </Provider>
    ), div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
