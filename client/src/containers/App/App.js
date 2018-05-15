import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppHeader from '../../components/AppHeader';
import ConditionalRoute from '../../components/ConditionalRoute';
import LoginPage from '../LoginPage';
import TodoListPage from '../TodoListPage';

const styles = {
  content: {
    padding: 20
  }
};

const App = (props) => {
  const {
    classes,
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
      <AppHeader
        appTitle="Todo Assistant"
        user={ user }
      />
      <div className={ classes.content }>
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
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
  onGetAuthUser: PropTypes.func.isRequired
};

export default withStyles(styles)(App);
