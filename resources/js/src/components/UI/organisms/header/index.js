import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../../../redux-states/user/actions";

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


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
    <Header>Header</Header>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);