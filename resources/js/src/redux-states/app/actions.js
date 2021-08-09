

export function appStateLoaded() {
  return async (dispatch) => {
    dispatch({ type: "APP_STATE_LOADED" });
  };
}




