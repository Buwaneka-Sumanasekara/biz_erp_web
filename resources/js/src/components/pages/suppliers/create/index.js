import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FormSupplierCreate } from "../../../UI/molecules";
import DefaultTemplate from "../../../templates/default";
import { Globals } from "../../../../constants";
import { GlobalAlertContext } from "../../../../context/GlobalAlertContext";
import { Row, Col } from "antd";
const SupplierEditPage = (props) => {
  useEffect(() => {}, []);

  return (
    <DefaultTemplate title={`Create Supplier`} enableBack={true}>
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
              />
            )}
          </GlobalAlertContext.Consumer>
        </Col>
      </Row>
    </DefaultTemplate>
  );
};

// Specifies the default values for props:
SupplierEditPage.defaultProps = {};

SupplierEditPage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SupplierEditPage);
