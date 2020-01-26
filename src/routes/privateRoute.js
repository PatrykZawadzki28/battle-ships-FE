import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
	return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isloggedIn
});

export default connect(mapStateToProps)(PrivateRoute);