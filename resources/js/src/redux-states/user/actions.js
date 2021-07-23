import { AuthRepository, UserRepository } from "../../api";
import { ErrorMessages, CommonFunctions } from "../../utils";

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
      return apiResponse;
    } catch (error) {
      console.log(error);
      const errorObj = error.response.data.error;
      throw new ErrorMessages.CustomError(
        `[getUser][${error.response.status}]${errorObj.code}`,
        `${errorObj.message}`,
        "src/redux-states/user/actions.js:getUser"
      );
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
        type: "RESET"
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
