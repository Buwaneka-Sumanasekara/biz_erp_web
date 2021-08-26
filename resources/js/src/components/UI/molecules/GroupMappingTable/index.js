import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Checkbox } from "antd";



const GroupMappingTable = (props) => {
  const { arGroupTableDetails } = props;

  useEffect(() => {}, []);

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
      dataSource={props.data}
      columns={columns}
      loading={props.isLoading}
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
  onSubmit: () => {},
  data:[],
  isLoading:false
};

GroupMappingTable.propTypes = {
  onSubmit: PropTypes.func,
  data:PropTypes.array,
  isLoading:PropTypes.bool
};

const mapStateToProps = (state) => ({
  arGroupTableDetails: state.app.arGroupTableDetails,
});
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingTable);
