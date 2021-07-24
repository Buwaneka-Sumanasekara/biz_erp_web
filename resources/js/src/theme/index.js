import { extendTheme,withDefaultColorScheme, } from "@chakra-ui/react";
import Globals from "../constants/Globals";



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
const theme = extendTheme(overrides,withDefaultColorScheme({ colorScheme:Globals.DEFAULT_THEME}));



export default theme;
