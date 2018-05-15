import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = (props) => {
  const {
    appTitle,
    user
  } = props;

  return (
    <div style={ { display: 'flex', padding: 10, backgroundColor: 'blue', color: 'white' } }>
      <div style={{ flex: 1 }}>{ appTitle }</div>
      <div>{ user ? `Welcome ${user.name}` : null }</div>
    </div>
  );
};

AppHeader.propTypes = {
  appTitle: PropTypes.string,
  user: PropTypes.object
};

export default AppHeader;
