import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from './App';

import {
  setCurrentUser,
  getAuthUser
} from '../../actions/authActions';

class AppContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    onSetCurrentUser: PropTypes.func.isRequired
  }

  handleSetCurrentUser = (user) => {
    this.props.onSetCurrentUser(user);
  }

  handleGetAuthUser = (code) => {
    this.props.onGetAuthUser(code);
  }

  componentWillReceiveProps(nextProps) {
    const {
      auth: { user }
    } = nextProps;

    if (user) {
      this.handleSetCurrentUser(user);
    }
  }

  render() {
    const { auth } = this.props;

    return (
      <App
        auth={ auth }
        onGetAuthUser={ this.handleGetAuthUser }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSetCurrentUser: (user) => dispatch(setCurrentUser(user)),
  onGetAuthUser: (code) => dispatch(getAuthUser(code))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
