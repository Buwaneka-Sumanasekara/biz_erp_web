import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"

import theme from "./theme";

import {HomePage,LoginPage} from "./components/pages";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
