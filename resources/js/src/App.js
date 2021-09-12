import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Redux
import {Provider} from 'react-redux';
import configureStore from './configureStore';
const {store} = configureStore();




import {ProtectedRoute,RegulerRoute} from "./components/router-wrappers";

import {HomePage,LoginPage,Group_All_Page,Group_Mapping_Page,Suppliers_all_Page,Suppliers_create_Page,Suppliers_edit_Page} from "./components/pages";

const App = () => {



  return (
    <Provider store={store} >
       
    <BrowserRouter>
      <Switch>
        <RegulerRoute path="/login" component={LoginPage} exact />
        <ProtectedRoute path="/" component={HomePage} exact />

        <ProtectedRoute path="/product/group/:id" component={Group_All_Page} exact />
        <ProtectedRoute path="/product/group-mapping" component={Group_Mapping_Page} exact />

        <ProtectedRoute path="/suppliers" component={Suppliers_all_Page} exact />
        <ProtectedRoute path="/suppliers/create" component={Suppliers_create_Page} exact permission_id={1202} />
        <ProtectedRoute path="/suppliers/edit" component={Suppliers_edit_Page} exact permission_id={1203} />
        
      </Switch>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
