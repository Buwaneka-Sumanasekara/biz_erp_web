import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Row, Col } from "antd";
import { Select } from "../../atoms";

import { CommonFunctions } from "../../../../utils";

import * as ProductActions from "../../../../redux-states/product/actions";

const GroupMappingCreate = (props) => {
  const { arGroupTableDetails } = props;

  const [ObjSelectedValues, setSelectedValues] = useState({});
  const [GroupsArObj, setGroupsArObj] = useState({});

  useEffect(() => {
    loadAllGroups();
  }, []);

  function getAllPromissesForGroup() {
    const ar = [];

    for (const groupTable of arGroupTableDetails) {
      ar.push(props.getAllGroups(`${groupTable.id}`));
    }

    return ar;
  }

  function loadAllGroups() {
    Promise.all(getAllPromissesForGroup()).then((values) => {
      const GroupTableObj = {};
      let i = 0;
      for (const Artable of values) {
        GroupTableObj[i + 1] = {
          tableInfo: arGroupTableDetails[i],
          group_data: Artable,
        };
        i++;
      }

      setGroupsArObj(GroupTableObj);
    });
  }

  function onSelectValue(tableNo, value) {
    const ObjSelectedValues_updated = ObjSelectedValues;
    ObjSelectedValues_updated[tableNo] = value;
    setSelectedValues(ObjSelectedValues_updated);

    props.onValuesChange(ObjSelectedValues_updated);
  }

  return (
    <Row>
      {Object.values(GroupsArObj).map((value, index) => {
        return (
          <Col key={`${value.tableInfo.display_name}_${index}`}>
            <Select
              onSelectValue={(selectedValue) =>
                onSelectValue(value.tableInfo.id, selectedValue)
              }
              external_key_id={`${value.tableInfo.id}`}
              key={`${value.tableInfo.display_name}_select_${index}`}
              value_key={"name"}
              id_key={"id"}
              placeholder={`Select from ${value.tableInfo.display_name}`}
              data={value.group_data}
            />
          </Col>
        );
      })}
    </Row>
  );
};

// Specifies the default values for props:
GroupMappingCreate.defaultProps = {
  placeholder: "",
  onValuesChange: () => {},
};

GroupMappingCreate.propTypes = {
  placeholder: PropTypes.string,
  onValuesChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  arGroupTableDetails: state.app.arGroupTableDetails,
});
const mapDispatchToProps = {
  getAllGroups: ProductActions.getAllGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingCreate);
