import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {Table,Checkbox} from "antd";


const GroupListTable = (props) => {

  const {isLoading,data} = props;


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: text => <Checkbox checked={text==1} />
    },
    {
      title: 'Created date',
      dataIndex: 'created_at',
      key: 'created_at',
    },
  ];
  return (
<Table dataSource={data} columns={columns} loading={isLoading} rowKey={"id"} />
  );
};

// Specifies the default values for props:
GroupListTable.defaultProps = {
  onSubmit: () => {},
  isLoading: false,
};

GroupListTable.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default GroupListTable;
