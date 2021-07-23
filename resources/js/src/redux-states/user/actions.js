import { AuthRepository } from "../../api";
import ErrorMessages from "../../utils/ErrorMessages";

export function loginUser(obj) {
  return async (dispatch, getState) => {
    try {
      const apiResponse = await AuthRepository.login({
        username: obj.username,
        password: obj.password,
      });
      console.log(apiResponse);

      const userLoginObj = apiResponse.data;
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
