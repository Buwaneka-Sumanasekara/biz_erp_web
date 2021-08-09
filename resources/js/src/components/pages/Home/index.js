import React,{useEffect} from "react";
import {connect} from 'react-redux';
import * as UserActions from "../../../redux-states/user/actions";

const HomePage = (props) => {

    useEffect(() => {
   
    }, []);
  
   

  return (
    <>
    </>
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
