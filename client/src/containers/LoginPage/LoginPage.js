import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import authService from '../../services/authService';

import {
  AUTH_ENDPOINT
} from '../../constants/endpoints';

const styles = (theme) => ({
  root: {
    textAlign: 'center'
  },
  loginButton: {
    margin: theme.spacing.unit * 2
  }
});

const onClickLogin = () => {
  window.location = AUTH_ENDPOINT;
};

const LoginPage = (props) => {
  const {
    classes,
    auth: { error, user, waiting }
  } = props;

  const shouldShowLogin = !waiting && !user;

  return shouldShowLogin ? (
    <div className={ classes.root }>
      <div>
        <Button
          variant="raised"
          color="secondary"
          onClick={ onClickLogin }
        >
          Log In
        </Button>
      </div>
      { error ? <div>{ error }</div> : null }
    </div>
  ) : null;
};

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
