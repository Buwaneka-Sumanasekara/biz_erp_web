import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../redux-states/user/actions";

function RegulerRoute(props) {
  const {component:Component,isRehydrated,isAuthenticated,...restOfProps}=props;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if(isRehydrated){
        return setLoading(false);
    }
    return; 
  }, [isRehydrated]);

  useEffect(() => {
    if(!isLoading){
        getUserInfo();
    }
  }, [isLoading]);


function getUserInfo(){
    props.getUser();
}

  if(isLoading){
       return <div>Loading...</div> 
  }
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Redirect to="/" />: <Component {...props} /> 
      }
    />
  );
}

const mapStateToProps = (state) => ({
  isRehydrated: state.app.isRehydrated,
  isAuthenticated:state.user.isAuthenticated
});
const mapDispatchToProps = {
    getUser: UserActions.getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegulerRoute);
