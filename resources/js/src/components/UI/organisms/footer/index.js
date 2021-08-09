import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../../../redux-states/user/actions";

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


const FooterComponent = (props) => {



  return (
    <Footer>Footer</Footer>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);
