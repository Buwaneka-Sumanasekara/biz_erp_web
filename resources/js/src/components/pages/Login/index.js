import React, { useEffect } from "react";

import { AuthRepository } from "../../../api";

const LoginPage = (props) => {
  useEffect(() => {
    login();
  }, []);

  function login() {
    AuthRepository.login({ username: "Cashier", password: "123" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <div>{`This is Login page`}</div>;
};

export default LoginPage;
