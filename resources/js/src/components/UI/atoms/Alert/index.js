import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Alert} from "antd";


const AlertComponent = (props) => {
  const [message, setMessage] = useState(props.message);

  useEffect(() => {
    setMessage(props.message);
    let timer1 = setTimeout(() => setMessage(""), props.delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [props.message]);

  if (message !== "") {
    return <div className={"pb-2"}><Alert message={message} type="error" banner showIcon  /></div>;
  }

  return null;
};

// Specifies the default values for props:
AlertComponent.defaultProps = {
  status: "Error",
  delay: 2,
  message: "",
};

AlertComponent.propTypes = {
  status: PropTypes.string,
  delay: PropTypes.number,
  message: PropTypes.string,
};

export default AlertComponent;
