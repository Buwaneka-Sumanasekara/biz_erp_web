import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { FormSupplierCreate } from "../../../UI/molecules";
import DefaultTemplate from "../../../templates/default";
import { GlobalAlertContext } from "../../../../context/GlobalAlertContext";
import { Globals } from "../../../../constants";
import { CommonFunctions } from "../../../../utils";
import { Row, Col } from "antd";

const SupplierCreatePage = (props) => {
  let history = useHistory();
  let location = useLocation();


  return <DefaultTemplate title={`Edit Supplier`}  enableBack={true}>
      <Row>
        <Col span={12} offset={6}>
<GlobalAlertContext.Consumer>
            {(value) => (
              <FormSupplierCreate
                onSaveSuccess={(msg) => {
                  value.showAlert(Globals.MESSAGE_TYPES.SUCCESS, msg);
                }}
                onSaveError={(msg) =>
                  value.showAlert(Globals.MESSAGE_TYPES.ERROR, msg)
                }
                isUpdate={true} SupplierId={CommonFunctions.getQueryParameterValue(location.search,"id")}
              />
            )}
          </GlobalAlertContext.Consumer>
          </Col>
      </Row>
    
  </DefaultTemplate>;
};

// Specifies the default values for props:
SupplierCreatePage.defaultProps = {
 
};

SupplierCreatePage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierCreatePage);
