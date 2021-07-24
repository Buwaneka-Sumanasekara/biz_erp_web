import React, { useEffect, useState } from "react";
import classNames from "classnames";


import Row from 'react-bootstrap/Row';

const BSRowComponent = (props) => {
  const { children,...otherProps } = props;

  return (
    <Row {...otherProps}>
      {children}
    </Row>
  );
};

// Specifies the default values for props:
BSRowComponent.defaultProps = {};

BSRowComponent.propTypes = {

};

export default BSRowComponent;
