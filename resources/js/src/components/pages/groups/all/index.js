import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import DefaultTemplate from "../../../templates/default";

import { GroupListTable } from "../../../UI/molecules";
import { GroupCreateModal } from "../../../UI/organisms";

import { CommonFunctions } from "../../../../utils";

const GroupCreatePage = (props) => {
  const { match } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState("");

  const GroupId = match.params.id;

  return (
    <DefaultTemplate
      title={`Group - Level ${GroupId}`}
      headerProps={{
        onPressNew:() => setModalVisible(true),
      }}
    >
      <GroupListTable GroupNo={GroupId} lastRefreshTime={lastRefreshTime} />
      <GroupCreateModal
        GroupNo={GroupId}
        GroupName={`Level ${GroupId}`}
        isVisible={isModalVisible}
        onSuccessAndClose={() => {
          setModalVisible(false);
          setLastRefreshTime(CommonFunctions.getCurrentTime("X"));
        }}
        onClosed={() => setModalVisible(false)}
      />
    </DefaultTemplate>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreatePage);
