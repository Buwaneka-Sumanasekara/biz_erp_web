import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select } from "antd";

const { Option } = Select;



const SelectComponent = (props) => {

    const {value_key,id_key,external_key_id,isLoading} = props;

  useEffect(() => {}, []);

  function onChange(value) {
//    console.log(`selected ${value}`,props.data);

    const findValue=props.data.find(element => (id_key!==""?element[id_key]==value:element==value));
    props.onSelectValue(findValue);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Select
      showSearch
      style={{ width: props.width }}
      placeholder={props.placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      loading={isLoading}
    >
      {props.data &&
        props.data.map((item, i)=> {
           const value=(value_key!==""?item[value_key]:item);  
           const key=(id_key!==""?item[id_key]:item);  
          return   <Option key={`option_${external_key_id}_${key}`}  value={key}>{(value!==""?value:"-")}</Option>;
        })}
    </Select>
  );
};

// Specifies the default values for props:
SelectComponent.defaultProps = {
  placeholder: "",
  width: 200,
  data:[],
  value_key:"",
  id_key:"",
  external_key_id:"",
  onSelectValue:()=>{},
  isLoading:false  
};

SelectComponent.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.number,
  data:PropTypes.array,
  value_key:PropTypes.string,
  id_key:PropTypes.string,
  external_key_id:PropTypes.string,
  onSelectValue:PropTypes.func,
  isLoading:PropTypes.bool

};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent);
