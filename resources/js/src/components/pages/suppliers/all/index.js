import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { SuppliersTable } from "../../../UI/molecules";
import DefaultTemplate from "../../../templates/default";

import { GlobalPermissionCheckContext } from "../../../../context/GlobalPermissionCheckContext";

import PermissionCodes from "../../../../constants/PermissionCodes";
//actions
import * as UserActions from "../../../../redux-states/user/actions";
import * as AppActions from "../../../../redux-states/app/actions";

const SuppliersAllPage = (props) => {


  let history = useHistory();
  let location = useLocation();


  function onPressCreateSupplier() {
    props.routeToScreen(history, PermissionCodes.SUPPLIER.CREATE);
  }
 
  return (
    <GlobalPermissionCheckContext.Consumer>
      {(value) => {
        return (
          <DefaultTemplate
            title={`Suppliers`}
            headerProps={{
              onPressNew: value.checkPermission(PermissionCodes.SUPPLIER.CREATE)
                ? () => onPressCreateSupplier()
                : undefined,
                onPressSave: value.checkPermission(PermissionCodes.SUPPLIER.ALL)
                ? () => onPressCreateSupplier()
                : undefined,
            }}
          >
            <SuppliersTable />
          </DefaultTemplate>
        );
      }}
    </GlobalPermissionCheckContext.Consumer>
  );
};

// Specifies the default values for props:
SuppliersAllPage.defaultProps = {
  onShowMessage: () => {},
};

SuppliersAllPage.propTypes = {};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  routeToScreen: AppActions.routeToScreen,
  getPermissionFromAvailable: UserActions.getPermissionFromAvailable,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersAllPage);
