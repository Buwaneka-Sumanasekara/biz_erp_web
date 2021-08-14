import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../../../redux-states/user/actions";
import CommonFunctions from "../../../../utils/CommonFunctions";

import {TopMenu} from "../../molecules"

import { PageHeader,Tooltip } from "antd";
import { PoweroffOutlined } from '@ant-design/icons';

const HeaderComponent = (props) => {
  const {  profile,children } = props;




  const Acronym = CommonFunctions.getAcronym(
    `${profile.firstname} ${profile.lastname}`
  );
  return (

    <PageHeader
      title="Welcome"
      subTitle={`${profile.firstname} ${profile.lastname}`}
      avatar={{
        children: Acronym,
        style: {
          backgroundColor: CommonFunctions.getAcronymColor(Acronym),
          verticalAlign: "middle",
        },
      }}
      extra={[
        <Tooltip placement="bottom" title={"Logout"}>
        <PoweroffOutlined style={{fontSize:30}} />
        </Tooltip>
      ]}
    >
      <TopMenu/>
      {children}
      </PageHeader>
  );
};

const mapStateToProps = (state) => ({
  permissions_uimenu_tree: state.user.permissions_uimenu_tree,
  permissions: state.user.permissions,
  profile: state.user.profile,
});
const mapDispatchToProps = {
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
