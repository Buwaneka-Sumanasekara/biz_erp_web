import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";

import { Header } from "../../UI/organisms";
import { PageHeader } from "../../UI/atoms";

const DefaultTemplate = (props) => {
  const { children, title, subTitle } = props;

  return (
    <Container fluid>
      <Row>
        <Col>
        <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <PageHeader title={title} subTitle={subTitle}>
            {children}
          </PageHeader>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTemplate);
