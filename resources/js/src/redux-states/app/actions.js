import * as UserActions from "../user/actions";
import { CommonFunctions } from "../../utils";

export function appStateLoaded() {
  return async (dispatch) => {
    dispatch({ type: "APP_STATE_LOADED" });
  };
}

export function appsetGroupSettings(arGroupSettings) {
  return async (dispatch) => {
    dispatch({
      type: "APP_SET_GROUP_SETTINGS",
      arGroupTableDetails: arGroupSettings,
    });
  };
}

export function routeToScreen(history, PermissionId,parameters={}) {
  return async (dispatch, getState) => {
    try {
      const PermissionsObj = await dispatch(
        UserActions.getPermissionFromAvailable([PermissionId])
      );
      if (PermissionsObj) {
        const url=`${PermissionsObj[PermissionId].url_path}${CommonFunctions.generateQueryParameter(parameters)}`;
        history.push(url);
      }
    } catch (error) {
      history.push("/");
    }
  };
}
