import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import ConditionalRoute from '../../components/ConditionalRoute';
import LoginPage from '../LoginPage';
import TodoListPage from '../TodoListPage';

const App = (props) => {
  const {
    auth: { user },
    onGetAuthUser
  } = props;

  const searchParams = new URLSearchParams(location.search);
  const authCode = searchParams.get('code');

  if (authCode) {
    props.onGetAuthUser(authCode);
  }

  return (
    <div>
      <Router>
        <Switch>
          <ConditionalRoute
            path="/login"
            component={ LoginPage }
            condition={ !user }
            fallbackRedirectTo="/"
          />
          <ConditionalRoute
            path="/"
            component={ TodoListPage }
            condition={ !!user }
            fallbackRedirectTo="/login"
          />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {
  auth: PropTypes.object,
  onGetAuthUser: PropTypes.func.isRequired
};

export default App;
