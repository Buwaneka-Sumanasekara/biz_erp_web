import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { PageHeader } from "antd";
import { useHistory, useLocation } from "react-router-dom";

import CustomBreadcrump from "../Breadcrump";

import CommonFunctions from "../../../../utils/CommonFunctions";

const PageHeaderComponent = (props) => {
  const { children,title, subTitle, enableBack,permissions,extra } = props;

  const [openKeys, setOpenKeys] = useState([]);

  let history = useHistory();
  const location = useLocation();



  useEffect(() => {
    return getKeyOfCurrentPath();
  }, [children]);

  function getKeyOfCurrentPath() {
    
    const url = location.pathname;
    const found = permissions.find((element) => element.url_path == url);
    if (found !== undefined) {
      setTimeout(() => {
        const arParents = CommonFunctions.getAllParentsOfTree(
          permissions,
          found,
          [found],
          true
        );
        setOpenKeys(arParents.reverse().map(v => ({path: v.url_path,breadcrumbName:v.display_name})));
      }, 500);
    }
  }

  return (
    <PageHeader
      onBack={enableBack ? () => history.goBack() : undefined}
      title={title}
      subTitle={subTitle}
      breadcrumb={{ routes:openKeys }}
      breadcrumbRender={(props,originBreadcrumb)=><CustomBreadcrump routes={props.breadcrumb.routes}/>}
      extra={extra}
    >
      {children}
      </PageHeader>
  );
};

// Specifies the default values for props:
PageHeaderComponent.defaultProps = {
  enableBack: false
};

PageHeaderComponent.propTypes = {
  enableBack: PropTypes.bool
};

const mapStateToProps = (state) => ({
  permissions_uimenu_tree: state.user.permissions_uimenu_tree,
  permissions: state.user.permissions,
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeaderComponent);

