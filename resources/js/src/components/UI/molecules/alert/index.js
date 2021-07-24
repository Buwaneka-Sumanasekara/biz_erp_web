import React, { useEffect, useState } from "react";

import { Alert,AlertIcon } from "@chakra-ui/react";


const AlertComponent = (props) => {
   const [message,setMessage] = useState(props.message);


  useEffect(() => {
    setAutoHide(props.message)
  }, [props.message]);


  function setAutoHide(passedMessage){
    setMessage(passedMessage);
      setTimeout(()=>{
        setMessage("")
      },3000);
  }

  if(message!==""){
    return (
        <Alert status={props.status}>
        <AlertIcon />
        {message}
        </Alert>
       );
  }

  return (null);
  
};



export default AlertComponent;
