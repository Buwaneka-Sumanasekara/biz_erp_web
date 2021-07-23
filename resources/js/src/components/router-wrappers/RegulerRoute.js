import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../redux-states/user/actions";

function RegulerRoute(props) {
  const {component:Component,isRehydrated,...restOfProps}=props;

  const [isLoading, setLoading] = useState(true);
  const [isAuthenticating, setAuthenticating] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

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
    setAuthenticating(true);
    props.getUser().then(res=>{
        setAuthenticated(true);
    }).catch(er=>{
        setAuthenticated(false);
    }).finally(()=>{
        setAuthenticating(false);
    })
}

  if(isLoading || isAuthenticating){
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
});
const mapDispatchToProps = {
    getUser: UserActions.getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegulerRoute);
