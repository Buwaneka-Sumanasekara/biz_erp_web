import React from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import App from "./App";

if (document.getElementById("app")) {
  ReactDOM.render(
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </>,
    document.getElementById("app")
  );
}
