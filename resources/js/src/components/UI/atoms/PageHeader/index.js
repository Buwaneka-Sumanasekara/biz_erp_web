import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, PageHeader } from "antd";
import {
  CheckCircleFilled,
  EditFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import CustomBreadcrump from "../Breadcrump";

import CommonFunctions from "../../../../utils/CommonFunctions";

import CustomIcon from "../CustomIcon";

const PageHeaderComponent = (props) => {
  const { children, title, subTitle, enableBack, permissions, headerProps } =
    props;

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
        setOpenKeys(
          arParents
            .reverse()
            .map((v) => ({ path: v.url_path, breadcrumbName: v.display_name }))
        );
      }, 500);
    }
  }

  function getExtraButtons() {
    const arExtraButton = [];
    if (headerProps) {
      if (headerProps.onPressSearch) {
        arExtraButton.push(
          <Button
            type={"text"}
            key={1}
            onClick={() => headerProps.onPressSearch()}
            icon={<CustomIcon name={"Search"} style={{ fontSize: "32px" }} />}
          />
        );
      }
      if (headerProps.onPressNew) {
        arExtraButton.push(
          <Button
            type={"text"}
            key={1}
            onClick={() => headerProps.onPressNew()}
            icon={<PlusCircleFilled style={{ fontSize: "32px" }} />}
          />
        );
      }
      if (headerProps.onPressSave) {
        arExtraButton.push(
          <Button
            type={"text"}
            key={1}
            onClick={() => headerProps.onPressNew()}
            icon={<CheckCircleFilled style={{ fontSize: "32px" }} />}
          />
        );
      }
      if (headerProps.onPressEdit) {
        arExtraButton.push(
          <Button
            type={"text"}
            key={1}
            onClick={() => headerProps.onPressNew()}
            icon={<EditFilled style={{ fontSize: "32px" }} />}
          />
        );
      }
    }

    return arExtraButton;
  }

  return (
    <PageHeader
      onBack={
        enableBack
          ? () => (props.onBack ? props.onBack() : history.goBack())
          : undefined
      }
      title={title}
      subTitle={subTitle}
      breadcrumb={{ routes: openKeys }}
      breadcrumbRender={(props, originBreadcrumb) => (
        <CustomBreadcrump routes={props.breadcrumb.routes} />
      )}
      extra={getExtraButtons()}
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
  onBack: PropTypes.func,
  headerProps: PropTypes.shape({
    onPressSave: PropTypes.func,
    onPressEdit: PropTypes.func,
    onPressSearch: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  permissions_uimenu_tree: state.user.permissions_uimenu_tree,
  permissions: state.user.permissions,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHeaderComponent);
