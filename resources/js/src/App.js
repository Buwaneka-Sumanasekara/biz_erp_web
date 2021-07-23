import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

//Redux
import {Provider} from 'react-redux';
import configureStore from './configureStore';
const {store} = configureStore();

import theme from "./theme";

import {ProtectedRoute,RegulerRoute} from "./components/router-wrappers";

import {HomePage,LoginPage} from "./components/pages";

const App = () => {
  return (
    <Provider store={store} >
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <RegulerRoute path="/login" component={LoginPage} exact />
        <ProtectedRoute path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
    </ChakraProvider>
    </Provider>
  );
};

export default App;
