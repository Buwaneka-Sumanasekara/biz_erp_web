

export function appStateLoaded() {
  return async (dispatch) => {
    dispatch({ type: "APP_STATE_LOADED" });
  };
}

export function appsetGroupSettings(arGroupSettings) {
  return async (dispatch) => {

    dispatch({ type: "APP_SET_GROUP_SETTINGS",arGroupTableDetails:arGroupSettings });
  };
}


