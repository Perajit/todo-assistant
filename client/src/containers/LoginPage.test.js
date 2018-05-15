import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginPage from './LoginPage';

import { store } from '../store';

describe('<LoginPage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render((
      <Provider store={ store }>
        <LoginPage />
      </Provider>
    ), div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
