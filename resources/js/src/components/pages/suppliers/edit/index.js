import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { FormSupplierCreate } from "../../../UI/molecules";
import DefaultTemplate from "../../../templates/default";

const SupplierCreatePage = (props) => {
  

  useEffect(() => {}, []); 

  return <DefaultTemplate title={`Create Supplier`}  enableBack={true}>
    <FormSupplierCreate/>
    
  </DefaultTemplate>;
};

// Specifies the default values for props:
SupplierCreatePage.defaultProps = {
 
};

SupplierCreatePage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierCreatePage);
