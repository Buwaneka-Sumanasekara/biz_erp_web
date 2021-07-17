import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {HomePage,LoginPage} from "./components/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
