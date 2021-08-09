import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";

import {SideMenu} from "../../UI/organisms"




const DefaultTemplate = (props) => {
  const { children } = props;

  return (
    <>
  
      <Container fluid>
        <Row>
          <Col md={3}><SideMenu/></Col>
          <Col md={9}>{children}</Col>
        </Row>
      </Container>
    
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTemplate);
