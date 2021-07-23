import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../redux-states/user/actions";

function ProtectedRoute(props) {
  const { component: Component, isRehydrated, ...restOfProps } = props;

  const [isLoading, setLoading] = useState(true);
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (isRehydrated) {
      setLoading(false);
    }
  }, [isRehydrated]);

  useEffect(() => {
    if (!isLoading) {
      getUserInfo();
    }
  }, [isLoading]);

  function getUserInfo() {

      props
        .getUser()
        .then((res) => {
          setAuthenticated(true);
        })
        .catch((er) => {
          setAuthenticated(false);
        })
        .finally(() => {
          setAuthenticating(false);
        });
    
  }

  if (isLoading || isAuthenticating) {
    return <div>Loading...</div>;
  }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

const mapStateToProps = (state) => ({
  isRehydrated: state.app.isRehydrated,
  token: state.user.token,
});
const mapDispatchToProps = {
  getUser: UserActions.getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
