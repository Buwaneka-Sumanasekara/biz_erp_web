import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

import { FormGroupCreate } from "../../molecules";

const GroupCreateModalComponent = (props) => {
  const { GroupName, GroupNo, isVisible } = props;


  useEffect(() => {

}, [isVisible]);

  function onGroupCreated() {
    props.onSuccessAndClose();
  }

  return (
    <Modal title={`Create Group | ${GroupName}`} centered visible={isVisible} onCancel={()=>props.onClosed()} footer={null}>
      <FormGroupCreate GroupNo={GroupNo} onSuccess={() => onGroupCreated()} />
    </Modal>
  );
};

// Specifies the default values for props:
GroupCreateModalComponent.defaultProps = {
  onSuccessAndClose: () => {},
  onClosed: () => {},
  isVisible: false,
};

GroupCreateModalComponent.propTypes = {
  onSuccessAndClose: PropTypes.func,
  onClosed: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default GroupCreateModalComponent;
