import React,{useEffect} from "react";
import { Button, ButtonGroup,useColorMode } from "@chakra-ui/react";
import {connect} from 'react-redux';

import {Header} from "../../UI/organisms";

import * as UserActions from "../../../redux-states/user/actions";

const HomePage = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
   
    }, []);
  
    function logoutUser(){
      props.logoutUser(resp=>{
          
      }).catch(er=>{

      })
    }

  return (
    <Header>
      {`This is home page`}
      <Button  onClick={toggleColorMode} variant="solid">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
  
    </Header>
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
