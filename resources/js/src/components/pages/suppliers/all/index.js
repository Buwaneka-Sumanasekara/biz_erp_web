import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { SuppliersTable, FormSupplierCreate } from "../../../UI/molecules";
import DefaultTemplate from "../../../templates/default";

const SuppliersAllPage = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  let history = useHistory();
  useEffect(() => {}, []);

  function onPressCreateSupplier() {
    history.push(`/suppliers/create`);
  }

  return (
    <DefaultTemplate
      title={`Suppliers`}
      headerProps={{
        onPressNew: () => onPressCreateSupplier(),
      }}
    >
      <SuppliersTable />
    </DefaultTemplate>
  );
};

// Specifies the default values for props:
SuppliersAllPage.defaultProps = {
  onShowMessage: () => {},
};

SuppliersAllPage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersAllPage);
