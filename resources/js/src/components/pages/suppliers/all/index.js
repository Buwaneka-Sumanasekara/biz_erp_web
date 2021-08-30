import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import DefaultTemplate from "../../../templates/default";

const SuppliersAllPage = (props) => {
  useEffect(() => {}, []); 

  return <DefaultTemplate title={`Suppliers`}></DefaultTemplate>;
};

// Specifies the default values for props:
SuppliersAllPage.defaultProps = {
  onShowMessage: () => {},
};

SuppliersAllPage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersAllPage);
