import { extendTheme,withDefaultColorScheme, } from "@chakra-ui/react";

import colors from "./colors";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const overrides = {
  config,
  colors
};

//https://chakra-ui.com/docs/theming/theme
const theme = extendTheme(overrides,withDefaultColorScheme({ colorScheme: "nandana_hardware" }))
export default theme;
