import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  title: {
    flex: 1,
    textAlign: 'left'
  }
};

const AppHeader = (props) => {
  const {
    classes,
    appTitle,
    user
  } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          noWrap
          className={ classes.title }
        >
          { appTitle }
        </Typography>
        { user ? `Welcome ${user.name}` : null }
      </Toolbar>
    </AppBar>
  );
};

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  appTitle: PropTypes.string,
  user: PropTypes.object
};

export default withStyles(styles)(AppHeader);
