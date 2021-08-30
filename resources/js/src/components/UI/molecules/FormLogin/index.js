import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";


import * as UserActions from "../../../../redux-states/user/actions";

const FormLogin = (props) => {

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  function onUserLogin(values) {
    setLoading(true);
    props.onError("");
    props
      .loginUser({ username: values.username, password: values.password })
      .then((res) => {
       props.onSuccess();
      })
      .catch((er) => {
        props.onError(er.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }


  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onUserLogin}
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
  onSuccess: () => {},
  onError:()=>{}
};

FormLogin.propTypes = {
  onSuccess: PropTypes.func,
  onError:PropTypes.func
};


const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  loginUser: UserActions.loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);