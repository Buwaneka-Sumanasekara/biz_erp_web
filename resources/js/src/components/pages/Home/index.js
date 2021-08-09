import React,{useEffect} from "react";
import {connect} from 'react-redux';
import * as UserActions from "../../../redux-states/user/actions";

import DefaultTemplate from "../../templates/default";

const HomePage = (props) => {

    useEffect(() => {
   
    }, []);
  
   

  return (
    <DefaultTemplate>
      <div>sss</div>
    </DefaultTemplate>
  );
};


const mapStateToProps = state => ({
 
});
const mapDispatchToProps = {
  logoutUser:UserActions.logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
