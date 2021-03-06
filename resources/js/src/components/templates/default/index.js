import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { Header } from "../../UI/organisms";
import { PageHeader, Alert, CustomLoading } from "../../UI/atoms";

//context
import { GlobalAlertContext } from "../../../context/GlobalAlertContext";

const DefaultTemplate = (props) => {
  const {
    children: PassedChildren,
    title,
    subTitle,
    headerProps,
    enableBack,
    onBack,
    isLoading,
  } = props;

  const [msgObj, showMessage] = useState({});
  const [permissionCodes, setPermissionCode] = useState({});

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
            {isLoading && <CustomLoading />}

            {!isLoading && (
              <PageHeader
                title={title}
                subTitle={subTitle}
                headerProps={headerProps}
                enableBack={enableBack}
                onBack={onBack}
              >
                {msgObj.type && msgObj.msg && (
                  <Alert status={msgObj.type} message={msgObj.msg} delay={-1} />
                )}
                {PassedChildren}
              </PageHeader>
            )}
          </Col>
        </Row>
      </Container>
    </GlobalAlertContext.Provider>
  );
};

// Specifies the default values for props:
DefaultTemplate.defaultProps = {
  enableBack: false,
  isLoading: false,
};

DefaultTemplate.propTypes = {
  enableBack: PropTypes.bool,
  headerProps: PropTypes.shape({
    onPressSave: PropTypes.func,
    onPressEdit: PropTypes.func,
    onPressSearch: PropTypes.func,
  }),
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  permissions: state.user.permissions,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultTemplate);
