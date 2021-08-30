import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import DefaultTemplate from "../../../templates/default";
import {
  GroupMappingTable,
  GroupTree,
  GroupMappingCreate,
} from "../../../UI/molecules";

import { CommonFunctions } from "../../../../utils";
import { Globals } from "../../../../constants";
//context
import { GlobalAlertContext } from "../../../../context/GlobalAlertContext";

const GroupMappingPage = (props) => {
  const { match } = props;

  const [lastRefreshTime, setLastRefreshTime] = useState("");
  const [isLoadingTable, setIsLoadingTable] = useState(false);
  const [isLoadingTree, setIsLoadingTree] = useState(false);

  function onValueChangeSelectGroup(val) {
    console.log("onValueChangeSelectGroup", val);
  }

  return (
    <DefaultTemplate title={`Group Mapping`}>
      <Row style={{ paddingBottom: 10 }}>
        <Col>
          <GlobalAlertContext.Consumer>
            {(value) => (
              <GroupMappingCreate
                onValuesChange={(val) => onValueChangeSelectGroup(val)}
                onSaveSuccess={(msg) => {
                  value.showAlert(Globals.MESSAGE_TYPES.SUCCESS, msg);
                  setLastRefreshTime(CommonFunctions.getCurrentTime("X"));
                }}
                onSaveError={(msg) =>
                  value.showAlert(Globals.MESSAGE_TYPES.ERROR, msg)
                }
                isLoading={isLoadingTable || isLoadingTree}
              />
            )}
          </GlobalAlertContext.Consumer>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <GroupMappingTable
            lastRefreshTime={lastRefreshTime}
            onLoading={(isLoading) => setIsLoadingTable(isLoading)}
          />
        </Col>
        <Col span={8} offset={2}>
          <GroupTree
            lastRefreshTime={lastRefreshTime}
            onLoading={(isLoading) => setIsLoadingTree(isLoading)}
          />
        </Col>
      </Row>
    </DefaultTemplate>
  );
};

// Specifies the default values for props:
GroupMappingPage.defaultProps = {
  onShowMessage: () => {},
};

GroupMappingPage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingPage);
