import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route
} from 'react-router-dom';

const getConditionalRouteRender = (Component, condition, fallbackRedirectTo) => ((props) => {
  return condition ? (
    <Component { ...props } />
  ) : (
    <Redirect
      to={ fallbackRedirectTo }
    />
  );
});

const ConditionalRoute = (props) => {
  const {
    component: Component,
    condition,
    fallbackRedirectTo,
    ...restProps
  } = props;

  return (
    <Route
      { ...restProps }
      render={ getConditionalRouteRender(Component, condition, fallbackRedirectTo) }
    />
  );
};

ConditionalRoute.propType = {
  component: PropTypes.object.isRequired,
  condition: PropTypes.bool.isRequired,
  fallbackRedirectTo: PropTypes.object.isRequired
};

export default ConditionalRoute;
