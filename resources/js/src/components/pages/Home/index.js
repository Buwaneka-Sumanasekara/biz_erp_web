import React from "react";
import { Button, ButtonGroup,useColorMode } from "@chakra-ui/react";

const HomePage = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      {`This is home page`}
      <Button  onClick={toggleColorMode} variant="solid">
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </div>
  );
};

export default HomePage;
