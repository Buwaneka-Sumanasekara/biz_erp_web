import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";

import { Alert } from "../../atoms";

import * as ProductActions from "../../../../redux-states/product/actions";

const FormGroupCreate = (props) => {
  const { GroupNo: passedGroupNo } = props;
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [form] = Form.useForm();


  
  useEffect(() => {

  }, [Error]);


  const onFinish = (values) => {
   
    values["group_no"] = parseInt(passedGroupNo);
    setLoading(true);
    setError("");
    props
      .createGroup(values)
      .then((res) => {
        form.resetFields();
        props.onSuccess();

      })
      .catch((er) => {
        console.log(er);
        setError(er.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Alert status="error" message={Error} />
      <Form
        form={form}
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
    </>
  );
};

// Specifies the default values for props:
FormGroupCreate.defaultProps = {
  onSuccess:()=>{}
};

FormGroupCreate.propTypes = {
  onSuccess:PropTypes.func
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  createGroup: ProductActions.createGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormGroupCreate);
