export const initialState = {
  token: "",
  profile: {},
  permissions:[],
  isAuthenticated:false
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "USER_SET_AUTHENTICATED":
        return {
          ...state,
          isAuthenticated: action.isAuthenticated,
        };
    case "USER_SET_PROFILE":
      return {
        ...state,
        profile: action.profile,
        permissions:action.permissions
      };
    default:
      return state;
  }
}
