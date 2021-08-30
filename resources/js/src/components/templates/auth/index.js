import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Layout } from "antd";
import "./style.scss";

const { Content } = Layout;

const AuthTemplate = (props) => {
  const { children } = props;

  return (
    <section className={"ftco-section "}>
      <Container>
        <Row className={"justify-content-center"}>
          <Col md={"12"} lg={"10"}>
            <div className={"wrap d-md-flex"}>
              <div
                className={
                  "login-card-right-wrap text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last"
                }
              >
                <Image className={"logo"} src="images/logo.png" />
              </div>
              <div className={"login-wrap p-4 p-lg-5"}>
                <div className={"d-flex"}>
                  <div className={"w-100"}>
                    <h3 className={"mb-4"}>Sign In</h3>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthTemplate);
