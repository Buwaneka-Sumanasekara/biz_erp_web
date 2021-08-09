import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { Container } from "react-bootstrap";

const AuthTemplate = (props) => {
  const { children } = props;

  return (
  <Container>
    <div>sss</div>
            {children}
    </Container>    
  );
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthTemplate);
