import React, { useEffect } from "react";
import {connect} from 'react-redux';

import * as UserActions from "../../../redux-states/user/actions";

const LoginPage = (props) => {
  useEffect(() => {
    loginUserNow()
  }, []);

  function loginUserNow() {
    props.loginUser({username:"Cashier",password:"123"}).then(res=>{
      console.log(res)
    }).catch(er=>{
      console.log(er.message)
    })
     
  }

  return <div>{`This is Login page`}</div>;
};


const mapStateToProps = state => ({
 
});
const mapDispatchToProps = {
  loginUser: UserActions.loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
