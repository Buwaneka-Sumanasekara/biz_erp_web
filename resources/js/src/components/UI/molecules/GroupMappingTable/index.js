import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table } from "antd";
//actions
import * as ProductActions from "../../../../redux-states/product/actions";

const GroupMappingTable = (props) => {
  const { arGroupTableDetails } = props;
  const [GroupMappingArray, setGroupMappingArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");

  useEffect(() => {
    onLoadGroupMappingData();
  }, [props.lastRefreshTime]);

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

  function getColumns() {
    const arCol = [];
    let i = 1;
    for (const GroupTable of arGroupTableDetails) {
      arCol.push({
        title: GroupTable.display_name,
        dataIndex: `group${i}_name`,
        key: `group${i}_name`,
      });
      i++;
    }

    return arCol;
  }

  const columns = getColumns();

  function onClickRow(event, record) {
    console.log(record);
  }

  return (
    <Table
      dataSource={GroupMappingArray}
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
GroupMappingTable.defaultProps = {
  lastRefreshTime: "",
  onLoading: () => {},
};

GroupMappingTable.propTypes = {
  lastRefreshTime: PropTypes.string,
  onLoading: PropTypes.func,
};

const mapStateToProps = (state) => ({
  arGroupTableDetails: state.app.arGroupTableDetails,
});
const mapDispatchToProps = {
  getAllGroupMapping: ProductActions.getAllGroupMapping,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingTable);
