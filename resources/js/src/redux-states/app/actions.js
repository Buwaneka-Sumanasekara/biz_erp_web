import { useColorMode } from "@chakra-ui/react";

export function appStateLoaded() {
  return async (dispatch) => {
    dispatch({ type: "APP_STATE_LOADED" });
  };
}




