import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Row, Col, Button, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { Select } from "../../atoms";

import { CommonFunctions } from "../../../../utils";

import * as ProductActions from "../../../../redux-states/product/actions";

const GroupMappingCreate = (props) => {
  const { arGroupTableDetails } = props;

  const [ObjSelectedValues, setSelectedValues] = useState({});
  const [GroupsArObj, setGroupsArObj] = useState({});
  const [isLoading, setLoading] = useState(false);

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

  function saveGroupMapping() {

    if (
      Object.values(ObjSelectedValues).length ===
      Object.values(GroupsArObj).length
    ) {
      // console.log(ObjSelectedValues);
      const groupMapObj = {};
      for (const key in ObjSelectedValues) {
        if (Object.hasOwnProperty.call(ObjSelectedValues, key)) {
          const element = ObjSelectedValues[key];
          groupMapObj[`group_${key}`] = element.id;
        }
      }

      setLoading(true);

      props
        .saveGroupMapping(groupMapObj)
        .then((res) => {
          props.onSaveSuccess("Save group mapping successfully");
        })
        .catch((er) => {
          props.onSaveError(er.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return (
    <Row align={"middle"} justify="space-between" gutter={8}>
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
              loading={isLoading}
            />
          </Col>
        );
      })}
      <Col>
        <Row justify={"end"}>
          <Col>
            <Button
              type="primary"
              shape="circle"
              size={"large"}
              onClick={() => saveGroupMapping()}
              loading={isLoading}
            >
              {"+"}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

// Specifies the default values for props:
GroupMappingCreate.defaultProps = {
  placeholder: "",
  onValuesChange: () => {},
  onSaveSuccess: () => {},
  onSaveError: () => {},
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
  saveGroupMapping: ProductActions.saveGroupMapping,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupMappingCreate);
