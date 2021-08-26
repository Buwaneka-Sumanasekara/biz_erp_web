import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";

import { Header } from "../../UI/organisms";

const HomeTemplate = (props) => {
  const { children, title, subTitle } = props;

  return (
    <Container fluid>
      <Row>
        <Col>
          <Header> {children}</Header>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTemplate);
