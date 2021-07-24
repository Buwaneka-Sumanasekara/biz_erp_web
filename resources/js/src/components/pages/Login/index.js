import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import AuthTemplate from "../../templates/auth";

import { FormLogin,Alert } from "../../UI/molecules";

import * as UserActions from "../../../redux-states/user/actions";

const SCREEN_LOGIN = "screen_login";
const SCREEN_FORGET_PASS = "screen_forgetpass";

const LoginPage = (props) => {
  let history = useHistory();
  const [ScreenName, setScreenName] = useState(SCREEN_LOGIN);
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");

  useEffect(() => {}, []);

  function onUserLogin(values) {
    setLoading(true);
    setError("");
    props.loginUser({username:values.uname,password:values.pass}).then(res=>{
      history.push("/");
    }).catch(er=>{
      setError(er.message);
    }).finally(()=>{
      setLoading(false);
    })

  }

  return (
    <AuthTemplate>
      <Box> 
        <Alert status="error" message={Error} />
        <FormLogin onSubmit={(values)=>onUserLogin(values)} isLoading={isLoading}  />
      </Box>
    </AuthTemplate>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  loginUser: UserActions.loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
