import React, { useState } from "react";
import { connect } from "react-redux";

import { PageHeader, Tooltip, Button } from "antd";
import { TopMenu } from "../../molecules";
import CustomIcon from "../../atoms/CustomIcon";

import CommonFunctions from "../../../../utils/CommonFunctions";
//actions
import * as UserActions from "../../../../redux-states/user/actions";

const HeaderComponent = (props) => {
  const { profile, children } = props;

  const [isLoading, setLoading] = useState(false);

  function _onlogout() {
    setLoading(true);
    props.logoutUser().finally(() => {
      setLoading(false);
    });
  }

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
          <Button
            type="text"
            icon={<CustomIcon name={"PowerOff"} style={{ fontSize: "32px"}}/>}
            onClick={() => _onlogout()}
          />
        </Tooltip>,
      ]}
    >
      <TopMenu />
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
