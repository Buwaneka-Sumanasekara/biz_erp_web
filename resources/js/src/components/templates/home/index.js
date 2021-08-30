import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { Header } from "../../UI/organisms";

const HomeTemplate = (props) => {
  const { children } = props;

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
