import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";


const FormLogin = (props) => {

  const {isLoading} = props;

  const onFinish = (values) => {
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
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input disabled={isLoading} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password  disabled={isLoading}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// Specifies the default values for props:
FormLogin.defaultProps = {
  onSubmit: () => {},
  isLoading: false,
};

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default FormLogin;
