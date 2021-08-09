import { AuthRepository, UserRepository } from "../../api";
import { ErrorMessages, CommonFunctions } from "../../utils";
import { ErrorCodes } from "../../constants";

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

      dispatch({
        type: "USER_SET_PROFILE",
        permissions: userData.permissions,
        permissions_tree:CommonFunctions.getTreeStructure(userData.permissions)
      });

      dispatch({
        type: "USER_SET_AUTHENTICATED",
        isAuthenticated: true,
      });
      return userData;
    } catch (error) {
      const errorObj = error.response.data.error;

      if (errorObj.code === ErrorCodes.UNAUTHORIZED) {
        dispatch({
          type: "USER_SET_AUTHENTICATED",
          isAuthenticated: false,
        });
      }else{
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
      console.log(apiResponse);
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
