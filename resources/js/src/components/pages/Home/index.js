import React,{useEffect} from "react";
import {connect} from 'react-redux';
import * as UserActions from "../../../redux-states/user/actions";

import HomeTemplate from "../../templates/home";

const HomePage = (props) => {

    useEffect(() => {
   
    }, []);
  
   

  return (
    <HomeTemplate>
      <div>dashboard here</div>
    </HomeTemplate>
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
