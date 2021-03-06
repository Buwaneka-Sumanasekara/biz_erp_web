import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Table, Checkbox, Button } from "antd";
import { EditFilled } from "@ant-design/icons";


import PermissionCodes from "../../../../constants/PermissionCodes";
//actions
import * as SupplierActions from "../../../../redux-states/supplier/actions";
import * as AppActions from "../../../../redux-states/app/actions";


const SupplierAllTable = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [arData, setData] = useState([]);

  let history = useHistory();
  let location = useLocation();

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
    {
      title: "Edit",
      dataIndex: "can_remove",
      key: "can_remove",
      render: (text,record) =>console.log(text,record),
    },
    {
      title: "Edit",
      dataIndex: "can_remove",
      key: "can_remove",
      render: (text,record) =>text?(
        
        <Button
          type={"text"}
          key={3}
          onClick={() => props.routeToScreen(history,PermissionCodes.SUPPLIER.EDIT,{id:record.id})}
          icon={<EditFilled style={{ fontSize: "32px" }} />}
        />
      ):undefined,
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
  routeToScreen: AppActions.routeToScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierAllTable);
