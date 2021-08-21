import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import DefaultTemplate from "../../../templates/default";

import {
  GroupMappingTable,
  GroupTree,
  GroupMappingCreate,
} from "../../../UI/molecules";

const GroupMappingPage = (props) => {
  const { match } = props;
  const [SelectedGroup1, setSelectedGroup1] = useState("");

  useEffect(() => {}, []);

  return (
    <DefaultTemplate title={`Group Mapping`}>
      <Row>
        <Col>
          <GroupMappingCreate />
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <GroupMappingTable />
        </Col>
        <Col span={10}>
          {SelectedGroup1 !== "" && <GroupTree Group1Id={SelectedGroup1} />}
        </Col>
      </Row>
    </DefaultTemplate>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingPage);
