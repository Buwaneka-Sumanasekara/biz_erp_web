import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes, { func } from "prop-types";
import { Tree } from "antd";

import { CommonFunctions } from "../../../../utils";

const GroupTree = (props) => {
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [currentOpenedParent, setcurrentOpenedParent] = useState("");

  useEffect(() => {
    generateTree();
  }, [props.data]);

  function generateTree() {
    setTreeData(
      CommonFunctions.getGroupValues(
        props.data,
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
                props.data,
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
GroupTree.defaultProps = {};

GroupTree.propTypes = {};

const mapStateToProps = (state) => ({
  arGroupTableDetails: state.app.arGroupTableDetails,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GroupTree);
