import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { Row, Col, Space } from "antd";

//context
import { GlobalAlertContext } from "../../../../context/GlobalAlertContext";

import DefaultTemplate from "../../../templates/default";

import {
  GroupMappingTable,
  GroupTree,
  GroupMappingCreate,
} from "../../../UI/molecules";

//actions
import * as ProductActions from "../../../../redux-states/product/actions";
import { Globals } from "../../../../constants";

const GroupMappingPage = (props) => {
  const { match } = props;

  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [GroupMappingArray, setGroupMappingArray] = useState([]);

  const [arSelectedGroups, setSelectedGroups] = useState([]);

  useEffect(() => {
    onLoadGroupMappingData();
  }, []);

  function onLoadGroupMappingData() {
    setLoading(true);
    setError("");
    props
      .getAllGroupMapping()
      .then((res) => {
        setGroupMappingArray(res);
      })
      .catch((er) => {
        setError(er.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

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
                isLoading={isLoading}
                onSaveSuccess={(msg) => {
                  value.showAlert(Globals.MESSAGE_TYPES.SUCCESS, msg);
                  onLoadGroupMappingData();
                }}
                onSaveError={(msg) =>
                  value.showAlert(Globals.MESSAGE_TYPES.ERROR, msg)
                }
              />
            )}
          </GlobalAlertContext.Consumer>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <GroupMappingTable data={GroupMappingArray} isLoading={isLoading} />
        </Col>
        <Col span={10}>
          <GroupTree data={GroupMappingArray} isLoading={isLoading} />
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
const mapDispatchToProps = {
  getAllGroupMapping: ProductActions.getAllGroupMapping,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingPage);
