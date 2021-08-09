import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Redux
import {Provider} from 'react-redux';
import configureStore from './configureStore';
const {store} = configureStore();



import {ProtectedRoute,RegulerRoute} from "./components/router-wrappers";

import {HomePage,LoginPage} from "./components/pages";

const App = () => {
  return (
    <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <RegulerRoute path="/login" component={LoginPage} exact />
        <ProtectedRoute path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
