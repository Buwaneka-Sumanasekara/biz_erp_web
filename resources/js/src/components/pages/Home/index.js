import React,{useEffect} from "react";
import { Button, ButtonGroup,useColorMode } from "@chakra-ui/react";
import { UserRepository } from "../../../api";


const HomePage = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
      getUser()
    }, []);
  
    function getUser() {
      UserRepository.user()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

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
