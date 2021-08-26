// Set initial state
import Globals from "../../constants/Globals";

export const initialState = {
  isRehydrated: false, //should false,
  arGroupTableDetails:[]
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "APP_STATE_LOADED":
      return {
        ...state,
        isRehydrated: true,
      };
      case "APP_SET_GROUP_SETTINGS":
      return {
        ...state,
        arGroupTableDetails: action.arGroupTableDetails,
      };
    default:
      return state;
  }
}
