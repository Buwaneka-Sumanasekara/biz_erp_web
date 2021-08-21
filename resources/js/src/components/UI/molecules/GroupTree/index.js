import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Checkbox } from "antd";

import * as ProductActions from "../../../../redux-states/product/actions";

const GroupTree = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [GroupMappingByGroup1Array, setGroupMappingByGroup1Array] = useState(
    []
  );

  useEffect(() => {
    onLoadGroupMappingData(props.Group1Id);
  }, [props.Group1Id]);

  function onLoadGroupMappingData(group1_id) {
    if (group1_id !== "") {
      setLoading(true);
      setError("");
      props
        .getAllGroupMappingByGroup1(group1_id)
        .then((res) => {
          console.log(res);
        })
        .catch((er) => {
          setError(er.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return <></>;
};

// Specifies the default values for props:
GroupTree.defaultProps = {
  Group1Id: "",
};

GroupTree.propTypes = {
  Group1Id: PropTypes.string,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  getAllGroupMappingByGroup1: ProductActions.getAllGroupMappingByGroup1,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupTree);
