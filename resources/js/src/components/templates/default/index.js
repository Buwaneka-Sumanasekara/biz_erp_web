import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { Header } from "../../UI/organisms";
import { PageHeader, Alert } from "../../UI/atoms";

//context
import { GlobalAlertContext } from "../../../context/GlobalAlertContext";

const DefaultTemplate = (props) => {
  const { children: PassedChildren, title, subTitle, extra } = props;

  const [msgObj, showMessage] = useState({});

  useEffect(() => {
    let timer1 = null;
    if (Object.values(msgObj).length > 0) {
      timer1 = setTimeout(() => showMessage({}), 3000);

      return () => {
        if (timer1 !== null) {
          clearTimeout(timer1);
        }
      };
    }

    return () => {
      if (timer1 !== null) {
        clearTimeout(timer1);
      }
    };
  }, [msgObj]);

  function showAlert(type, msgtxt) {
    showMessage({
      type: `${type}`,
      msg: msgtxt,
    });
  }

  return (
    <GlobalAlertContext.Provider value={{ showAlert: showAlert }}>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <PageHeader title={title} subTitle={subTitle} extra={extra}>
              {msgObj.type && msgObj.msg && (
                <Alert status={msgObj.type} message={msgObj.msg} delay={-1} />
              )}
              {PassedChildren}
            </PageHeader>
          </Col>
        </Row>
      </Container>
    </GlobalAlertContext.Provider>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTemplate);
