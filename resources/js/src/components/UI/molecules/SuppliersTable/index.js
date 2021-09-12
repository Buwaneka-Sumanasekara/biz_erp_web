import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table,Checkbox } from "antd";

import { CommonFunctions } from "../../../../utils";

//actions
import * as SupplierActions from "../../../../redux-states/supplier/actions";

const SupplierAllTable = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [arData, setData] = useState([]);

  useEffect(() => {
    onLoadAllSuppliers();
  }, []);

  function onLoadAllSuppliers() {
    setLoading(true);
    setError("");
    props
      .getAllSuppliers()
      .then((res) => {
        console.log(res);
        setData(res.data);
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
      title: "Contact1",
      dataIndex: "contact1",
      key: "contact1",
    },
    {
      title: "Contact1",
      dataIndex: "contact2",
      key: "contact2",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (text) => <Checkbox checked={text} />,
    },
  ];

  function onClickRow(event, record) {
    console.log(record);
  }

  return (
    <Table
      dataSource={arData}
      columns={columns}
      loading={isLoading}
      rowKey={"id"}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            onClickRow(event, record);
          }, // click row
          onDoubleClick: (event) => {}, // double click row
          onContextMenu: (event) => {}, // right button click row
          onMouseEnter: (event) => {}, // mouse enter row
          onMouseLeave: (event) => {}, // mouse leave row
        };
      }}
    />
  );
};

// Specifies the default values for props:
SupplierAllTable.defaultProps = {
  lastRefreshTime: "",
  onLoading: () => {},
};

SupplierAllTable.propTypes = {
  lastRefreshTime: PropTypes.string,
  onLoading: PropTypes.func,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  getAllSuppliers: SupplierActions.getAllSuppliers,
};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierAllTable);
