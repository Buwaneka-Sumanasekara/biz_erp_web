import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";
import Globals from "../../../constants/Globals";

import { BSContainer } from "../../UI/organisms";
import { BSCol, BSRow } from "../../UI/molecules";

import "./style.scss";

const AuthTemplate = (props) => {
  const { children } = props;

  return (
    <BSContainer className={"container-md"}>
      <BSRow className={"auth-wrapper my-auto"}>
        <BSCol col={"4"} className={"px-0"} >
          <Box h="100%" bg={`${Globals.DEFAULT_THEME}.900`}>
            
          </Box>
        </BSCol>
        <BSCol col={"8"} className={"p-5"}>
        <Box h="100%" bg={`${Globals.DEFAULT_THEME}.0`}>
        {children}
          </Box>
         
        </BSCol>
      </BSRow>
    </BSContainer>
  );
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthTemplate);
