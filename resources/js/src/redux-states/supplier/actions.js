import { SupplierRepository } from "../../api";
import { ErrorMessages, CommonFunctions } from "../../utils";
import { ErrorCodes } from "../../constants";

import * as UserActions from "../user/actions";

export function getAllSuppliers() {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await SupplierRepository.all(token);
      const arSuppliers = apiResponse.data;
      return arSuppliers;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(getAllSuppliers()));
      } else {
        throw new ErrorMessages.CustomError(
          `[getAllSuppliers][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/supplier/actions.js:getAllSuppliers"
        );
      }
    }
  };
}

export function getSpecificSupplier(id) {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await SupplierRepository.getSpecific(token,id);
      const Supplier = apiResponse.data["data"];
      return Supplier;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(getSpecificSupplier(id)));
      } else {
        throw new ErrorMessages.CustomError(
          `[getSpecificSupplier][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/supplier/actions.js:getSpecificSupplier"
        );
      }
    }
  };
}

export function saveSupplier(obj) {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await SupplierRepository.create(token, CommonFunctions.removeUndefinedData(obj));
      const resp = apiResponse.data;
      return resp;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(saveSupplier(obj)));
      } else {
        throw new ErrorMessages.CustomError(
          `[saveSupplier][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/product/actions.js:saveSupplier"
        );
      }
    }
  };
}

export function updateSupplier(obj) {
    return async (dispatch, getState) => {
      try {
        const token = await CommonFunctions.getAccessTokenByState(getState);
        const apiResponse = await SupplierRepository.update(token,obj["id"], CommonFunctions.removeUndefinedData(obj));
        const resp = apiResponse.data;
        return resp;
      } catch (error) {
        const errorObj = error.response.data.error;
  
        if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
          return dispatch(UserActions.refreshToken(updateSupplier(obj)));
        } else {
          throw new ErrorMessages.CustomError(
            `[updateSupplier][${error.response.status}]${errorObj.code}`,
            `${errorObj.message}`,
            "src/redux-states/product/actions.js:updateSupplier"
          );
        }
      }
    };
  }
