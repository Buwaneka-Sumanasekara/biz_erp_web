import { AuthRepository, UserRepository } from "../../api";
import { ErrorMessages, CommonFunctions } from "../../utils";
import { ErrorCodes } from "../../constants";

import * as AppActions from "../app/actions";
import { ExceptionMap } from "antd/lib/result";

export function refreshToken(callback = () => {}) {
  return (dispatch, getState) => {
    dispatch({
      type: "USER_SET_AUTHENTICATED",
      isAuthenticated: false,
    });
    return false;
  };
}

export function checkPermissionAvailable(permid, allPermissions = []) {
  return async (dispatch, getState) => {
    try {
      let arPermissionsVal = [];
      if (allPermissions.length > 0) {
        arPermissionsVal = allPermissions;
      } else {
        arPermissionsVal = await CommonFunctions.getAvailablePermissionsByState(
          getState
        );
      }

      const found = arPermissionsVal.find((element) => element.id == permid);
      return found !== undefined;
    } catch (error) {
      return false;
    }
  };
}

export function getPermissionFromAvailable(arPermissions = []) {
  return async (dispatch, getState) => {
    try {
      const arPermissionsVal =
        await CommonFunctions.getAvailablePermissionsByState(getState);

      const objValid = {};

      for (const perm_id of arPermissions) {
        const found = arPermissionsVal.find((element) => element.id == perm_id);
        if (found) {
          objValid[perm_id] = found;
        }
      }

      if (Object.keys(objValid).length > 0) {
        return objValid;
      } else {
        throw new Exception("No items found");
      }
    } catch (error) {
      return undefined;
    }
  };
}

export function loginUser(obj) {
  return async (dispatch, getState) => {
    try {
      const apiResponse = await AuthRepository.login({
        username: obj.username,
        password: obj.password,
      });
      const userLoginObj = apiResponse.data;
      dispatch({
        type: "USER_SET_TOKEN",
        token: userLoginObj.login.access_token,
      });
      dispatch({
        type: "USER_SET_PROFILE",
        profile: userLoginObj.login.user,
        permissions: userLoginObj.login.permissions,
      });
      return userLoginObj;
    } catch (error) {
      const errorObj = error.response.data.error;
      throw new ErrorMessages.CustomError(
        `[loginUser][${error.response.status}]${errorObj.code}`,
        `${errorObj.message}`,
        "src/redux-states/user/actions.js:loginUser"
      );
    }
  };
}

export function getUser() {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await UserRepository.user(token);

      const userData = apiResponse.data;
      const ar_menu_permissions = userData.permissions.filter(
        (perm) => perm.is_tab == 1
      );

      dispatch({
        type: "USER_SET_PROFILE",
        permissions: userData.permissions,
        profile: userData.user,
        permissions_tree: CommonFunctions.getTreeStructure(
          userData.permissions
        ),
        permissions_uimenu_tree:
          CommonFunctions.getTreeStructure(ar_menu_permissions),
      });

      dispatch(
        AppActions.appsetGroupSettings(userData.app_settings.group_tables)
      );
      dispatch({
        type: "USER_SET_AUTHENTICATED",
        isAuthenticated: true,
      });
      return userData;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(refreshToken(getUser()));
      } else {
        throw new ErrorMessages.CustomError(
          `[getUser][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/user/actions.js:getUser"
        );
      }
    }
  };
}

export function logoutUser() {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await UserRepository.logout(token);
      dispatch({
        type: "RESET",
      });
      return apiResponse;
    } catch (error) {
      const errorObj = error.response.data.error;
      throw new ErrorMessages.CustomError(
        `[getUser][${error.response.status}]${errorObj.code}`,
        `${errorObj.message}`,
        "src/redux-states/user/actions.js:getUser"
      );
    }
  };
}
