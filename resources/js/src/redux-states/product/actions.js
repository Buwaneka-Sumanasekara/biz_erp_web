import { GroupRepository, GroupMappingRepository } from "../../api";
import { ErrorMessages, CommonFunctions } from "../../utils";
import { ErrorCodes } from "../../constants";

import * as UserActions from "../user/actions";

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
        return dispatch(UserActions.refreshToken(getAllGroups(GroupNo)));
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
      const apiResponse = await GroupRepository.create(token, data);
      const arGroups = apiResponse.data;
      return arGroups;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(createGroup(data)));
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

export function getAllGroupMapping() {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await GroupMappingRepository.all(token);
      const arGroups = apiResponse.data;
      return arGroups["data"];
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(getAllGroupMapping()));
      } else {
        throw new ErrorMessages.CustomError(
          `[getAllGroupMapping][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/product/actions.js:getAllGroupMapping"
        );
      }
    }
  };
}

export function getAllGroupMappingByGroup1(group1_id) {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await GroupMappingRepository.byGroup1Id(
        token,
        group1_id
      );
      const arGroups = apiResponse.data;
      return arGroups["data"];
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(getAllGroupMappingByGroup1(group1_id)));
      } else {
        throw new ErrorMessages.CustomError(
          `[getAllGroupMapping][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/product/actions.js:getAllGroupMapping"
        );
      }
    }
  };
}

export function saveGroupMapping(obj) {
  return async (dispatch, getState) => {
    try {
      const token = await CommonFunctions.getAccessTokenByState(getState);
      const apiResponse = await GroupMappingRepository.save(token, obj);
      const arGroups = apiResponse.data;
      return arGroups["data"];
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        return dispatch(UserActions.refreshToken(saveGroupMapping(obj)));
      } else {
        throw new ErrorMessages.CustomError(
          `[saveGroupMapping][${error.response.status}]${errorObj.code}`,
          `${errorObj.message}`,
          "src/redux-states/product/actions.js:saveGroupMapping"
        );
      }
    }
  };
}
