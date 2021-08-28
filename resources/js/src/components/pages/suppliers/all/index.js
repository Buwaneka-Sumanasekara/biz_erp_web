import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { Row, Col, Space } from "antd";

import DefaultTemplate from "../../../templates/default";
import { Globals } from "../../../../constants";



//actions




const SuppliersAllPage = (props) => {
  const { match } = props;

  const [isLoading, setLoading] = useState(false);



  useEffect(() => {
   
  }, []);

 

  return (
    <DefaultTemplate title={`Suppliers`}>
    
    </DefaultTemplate>
  );
};

// Specifies the default values for props:
SuppliersAllPage.defaultProps = {
  onShowMessage: () => {},
};

SuppliersAllPage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersAllPage);
