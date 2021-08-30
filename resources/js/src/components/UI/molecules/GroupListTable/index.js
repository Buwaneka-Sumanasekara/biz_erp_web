import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Checkbox } from "antd";

import * as ProductActions from "../../../../redux-states/product/actions";

const GroupListTable = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [arGroupData, setGroupArray] = useState([]);

  useEffect(() => {
    onLoadGroupData(props.GroupNo);
  }, [props.GroupNo, props.lastRefreshTime]);

  function onLoadGroupData(GroupId) {
    setLoading(true);
    setError("");
    props
      .getAllGroups(GroupId)
      .then((res) => {
        console.log(res);
        setGroupArray(res);
      })
      .catch((er) => {
        setError(er.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (text) => <Checkbox checked={text == 1} />,
    },
    {
      title: "Created date",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];
  return (
    <Table
      dataSource={arGroupData}
      columns={columns}
      loading={isLoading}
      rowKey={"id"}
    />
  );
};

// Specifies the default values for props:
GroupListTable.defaultProps = {
  lastRefreshTime: "",
};

GroupListTable.propTypes = {
  GroupNo: PropTypes.string.isRequired,
  lastRefreshTime: PropTypes.string,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  getAllGroups: ProductActions.getAllGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupListTable);
