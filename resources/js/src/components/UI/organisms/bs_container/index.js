import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Container from 'react-bootstrap/Container';

const BSContainerComponent = (props) => {
  const { children,...otherProps } = props;

  return (
    <Container {...otherProps}>
      {children}
    </Container>
  );
};

// Specifies the default values for props:
BSContainerComponent.defaultProps = {};

BSContainerComponent.propTypes = {

};

export default BSContainerComponent;
