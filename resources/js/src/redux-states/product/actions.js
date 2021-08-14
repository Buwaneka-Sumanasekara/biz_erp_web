import { GroupRepository } from "../../api";
import { ErrorMessages, CommonFunctions } from "../../utils";
import { ErrorCodes } from "../../constants";

export function getAllGroups(GroupNo) {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await GroupRepository.all(token, GroupNo);
      const arGroups = apiResponse.data;
      return arGroups;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        dispatch({
          type: "USER_SET_AUTHENTICATED",
          isAuthenticated: false,
        });
      } else {
        throw new ErrorMessages.CustomError(
          `[getAllGroups][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/product/actions.js:getAllGroups"
        );
      }
    }
  };
}

export function createGroup(data) {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await GroupRepository.create(token,data);
      const arGroups = apiResponse.data;
      return arGroups;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        dispatch({
          type: "USER_SET_AUTHENTICATED",
          isAuthenticated: false,
        });
      } else {
        throw new ErrorMessages.CustomError(
          `[createGroup][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/product/actions.js:createGroup"
        );
      }
    }
  };
}
