import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Tree, Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { CommonFunctions } from "../../../../utils";

//actions
import * as ProductActions from "../../../../redux-states/product/actions";

const GroupTree = (props) => {
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [GroupMappingArray, setGroupMappingArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");

  useEffect(() => {
    onLoadGroupMappingData();
  }, [props.lastRefreshTime]);

  useEffect(() => {
    generateTree();
  }, [GroupMappingArray]);

  useEffect(() => {
    props.onLoading(isLoading);
  }, [isLoading]);

  function onLoadGroupMappingData() {
    setLoading(true);
    setError("");
    props
      .getAllGroupMapping()
      .then((res) => {
        setGroupMappingArray([...GroupMappingArray, ...res]);
      })
      .catch((er) => {
        setError(er.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function generateTree() {
    setTreeData(
      CommonFunctions.getGroupValues(
        GroupMappingArray,
        1,
        [],
        props.arGroupTableDetails.length
      )
    );
  }

  function onLoadData({ child_parents, cur_level, key, children, pos }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }

      if (cur_level < props.arGroupTableDetails.length) {
        setTimeout(() => {
          setTreeData((origin) =>
            updateTreeData(
              origin,
              key,
              CommonFunctions.getGroupValues(
                GroupMappingArray,
                cur_level + 1,
                child_parents,
                props.arGroupTableDetails.length,
                pos
              )
            )
          );

          resolve();
        }, 1000);
      } else {
        resolve();
        return;
      }
    });
  }

  function updateTreeData(list, key, children) {
    return list.map((node) => {
      if (node.key === key) {
        return { ...node, children };
      }

      if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children),
        };
      }

      return node;
    });
  }

  function onExpand(expandedKeys, info) {
    setExpandedKeys(expandedKeys);
  }

  if (isLoading) {
    return (
      <Row align={"middle"} justify={"center"}>
        <Col className={"pt-5"}>
          <LoadingOutlined />
        </Col>
      </Row>
    );
  }

  return (
    <Tree
      onExpand={(expandedKeys, info) => onExpand(expandedKeys, info)}
      loadData={onLoadData}
      treeData={treeData}
      showLine
      expandedKeys={expandedKeys}
    />
  );
};

// Specifies the default values for props:
GroupTree.defaultProps = {
  lastRefreshTime: "",
  onLoading: () => {},
};

GroupTree.propTypes = {
  lastRefreshTime: PropTypes.string,
  onLoading: PropTypes.func,
};

const mapStateToProps = (state) => ({
  arGroupTableDetails: state.app.arGroupTableDetails,
});
const mapDispatchToProps = {
  getAllGroupMapping: ProductActions.getAllGroupMapping,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupTree);
