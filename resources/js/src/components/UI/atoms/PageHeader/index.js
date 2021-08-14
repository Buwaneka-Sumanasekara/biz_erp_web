import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PageHeader } from "antd";

const PageHeaderComponent = (props) => {
  const { children,title, subTitle, enableBack, history } = props;

  return (
    <PageHeader
      onBack={enableBack ? () => history.goBack() : undefined}
      title={title}
      subTitle={subTitle}
    >
      {children}
      </PageHeader>
  );
};

// Specifies the default values for props:
PageHeaderComponent.defaultProps = {
  enableBack: false,
};

PageHeaderComponent.propTypes = {
  enableBack: PropTypes.bool,
};

export default PageHeaderComponent;
