import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../redux-states/user/actions";

function ProtectedRoute(props) {
  const { component: Component, isRehydrated,isAuthenticated, ...restOfProps } = props;

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (isRehydrated) {
      setLoading(false);
    }
  }, [isRehydrated]);





  if (isLoading) {
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
  isAuthenticated:state.user.isAuthenticated
});
const mapDispatchToProps = {
  getUser: UserActions.getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);