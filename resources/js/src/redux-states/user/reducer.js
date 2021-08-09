export const initialState = {
  token: "",
  profile: {},
  permissions:[],
  permissions_tree:[],
  permissions_uimenu_tree:[],
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
        permissions:action.permissions,
        permissions_tree:action.permissions_tree,
        permissions_uimenu_tree:action.permissions_uimenu_tree
      };
    default:
      return state;
  }
}
