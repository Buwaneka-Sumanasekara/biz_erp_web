import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalPermissionCheckContext } from "../../context/GlobalPermissionCheckContext";

import * as UserActions from "../../redux-states/user/actions";

function ProtectedRoute(props) {
  const {
    component: Component,
    isRehydrated,
    isAuthenticated,
    permission_id,
    ...restOfProps
  } = props;

  const [isLoading, setLoading] = useState(true);
  const [isAuthenticating, setAuthenticating] = useState(true);
  let history = useHistory();

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
      .then(async (res) => {
        if (permission_id) {
          const isAllowed = await props.checkPermissionAvailable(
            permission_id,
            res.permissions
          );
          if (!isAllowed) {
            history.push("/");
          }
        }
      })
      .finally(() => {
        setAuthenticating(false);
      });
  }


  function checkPermission(PermissionID){
     const found=  props.permissions.find((element) => element.id == PermissionID);
     return (found?true:false);
  }

  if (isLoading || isAuthenticating) {
    return <div>Loading...</div>;
  }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (
          <GlobalPermissionCheckContext.Provider
            value={{ checkPermission: checkPermission }}
          >
            <Component {...props} />
          </GlobalPermissionCheckContext.Provider>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

const mapStateToProps = (state) => ({
  isRehydrated: state.app.isRehydrated,
  token: state.user.token,
  isAuthenticated: state.user.isAuthenticated,
  permissions: state.user.permissions ? state.user.permissions : null,
});
const mapDispatchToProps = {
  getUser: UserActions.getUser,
  checkPermissionAvailable: UserActions.checkPermissionAvailable,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
