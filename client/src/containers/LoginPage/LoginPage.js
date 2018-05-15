import React, { Component } from 'react';
import PropTypes from 'prop-types';

import authService from '../../services/authService';

import {
  AUTH_ENDPOINT
} from '../../constants/endpoints';

const LoginPage = (props) => {
  const {
    auth: { error, user, waiting }
  } = props;

  const shouldShowLogin = !waiting && !user;

  return shouldShowLogin ? (
    <div>
      <div>
        <div>Please log in</div>
        <button
          onClick={
            () => {
              window.location = AUTH_ENDPOINT;
            }
          }
        >
        Log In
        </button>
      </div>
      { error ? <div>{ error }</div> : null }
    </div>
  ) : null;
};

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired
};

export default LoginPage;
