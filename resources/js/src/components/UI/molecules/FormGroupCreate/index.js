import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";

const FormGroupCreate = (props) => {
  const { isLoading } = props;

  const onFinish = (values) => {
    console.log("values:", values);
    props.onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input group name" }]}
      >
        <Input disabled={isLoading} />
      </Form.Item>

      <Form.Item name="active" label="Active" valuePropName="checked">
        <Checkbox></Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

// Specifies the default values for props:
FormGroupCreate.defaultProps = {
  onSubmit: () => {},
  isLoading: false,
};

FormGroupCreate.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default FormGroupCreate;
