import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../../../redux-states/user/actions";

const HeaderComponent = (props) => {
  const { children } = props;
  let history = useHistory();

  function logoutUser() {
    props.logoutUser().then((resp) => {
      console.log(resp);
      history.push("/login");
    });
  }

  return (
    <div>
      {`This is header`}
      <Button onClick={() => logoutUser()} variant="solid">
        logout
      </Button>

      <div>{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
