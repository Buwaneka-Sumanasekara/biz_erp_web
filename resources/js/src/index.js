import React from "react";
import ReactDOM from "react-dom";
import theme from "./theme";

import App from "./App";

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
