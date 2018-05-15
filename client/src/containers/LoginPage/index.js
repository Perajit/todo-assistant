import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';

class LoginPageContainer extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  render() {
    const { auth } = this.props;

    return (
      <LoginPage
        auth={ auth }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(LoginPageContainer);
