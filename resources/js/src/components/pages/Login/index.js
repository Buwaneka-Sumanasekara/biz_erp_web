import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthTemplate from "../../templates/auth";

import { FormLogin } from "../../UI/molecules";

import { Alert } from "../../UI/atoms";

import * as UserActions from "../../../redux-states/user/actions";

const SCREEN_LOGIN = "screen_login";

const LoginPage = (props) => {
  let history = useHistory();
  const [ScreenName, setScreenName] = useState(SCREEN_LOGIN);
  const [Error, setError] = useState("");

  function onSuccess() {
    history.push("/");
  }

  return (
    <AuthTemplate>
      <Alert status="error" message={Error} />

      <FormLogin
        onSuccess={() => onSuccess()}
        onError={(msg) => setError(msg)}
      />
    </AuthTemplate>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  loginUser: UserActions.loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
