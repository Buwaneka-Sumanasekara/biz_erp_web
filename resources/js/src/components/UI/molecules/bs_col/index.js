import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';

const BSColComponent = (props) => {
  const { children,colsize, ...otherProps } = props;

  return (
    <Col {...otherProps}>
      {children}
    </Col>
  );
};

// Specifies the default values for props:
BSColComponent.defaultProps = {};

BSColComponent.propTypes = {

};

export default BSColComponent;
