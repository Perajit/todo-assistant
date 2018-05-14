import React, { Component } from 'react';
import PropTypes from 'prop-types';

import authService from '../../services/authService';

const redirectIfNeeded = () => {
};

const LoginPage = (props) => {
  const {
    auth: { error, user, waiting }
  } = props;

  const shouldShowLogin = !waiting && !user;

  return shouldShowLogin ? (
    <div>
      <div><a href={ authService.getLoginUrl() }>Login with LINE</a></div>
      { error ? <div>{ error }</div> : null }
    </div>
  ) : null;
};

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired
};

export default LoginPage;
