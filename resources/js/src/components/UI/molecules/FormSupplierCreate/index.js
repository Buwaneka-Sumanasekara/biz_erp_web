import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";
import * as SupplierActions from "../../../../redux-states/supplier/actions";

const FormSupplierCreate = (props) => {
  const { SupplierId: passedSupplierId } = props;
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
    try {
      if (props.isUpdate) {
        if (passedSupplierId !== "") {
          values["id"] = passedSupplierId;
        } else {
          throw Exception("No supplier Id found");
        }
      }

      const PromiseMethod = props.isUpdate
        ? props.updateSupplier(values)
        : props.saveSupplier(values);

      PromiseMethod.then((res) => {
        form.resetFields();
        props.onSaveSuccess(
          `Supplier ${props.isUpdate ? `updated` : `saved`} successfully`
        );
      })
        .catch((er) => {
          onSaveError(er.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      onSaveError(error.message);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
          rules={[{ required: true, message: "Please input supplier name" }]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item label="Contact 1 (Mobile)" name="contact1">
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item label="Contact 2 (Office)" name="contact2">
          <Input disabled={isLoading} />
        </Form.Item>
        <Form.Item label="Email" name="email_address">
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item name="active" label="Active" valuePropName="checked">
          <Checkbox></Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 24 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {props.isUpdate ? `Update` : `Save`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

// Specifies the default values for props:
FormSupplierCreate.defaultProps = {
  onSaveSuccess: () => {},
  onSaveError: () => {},
  isUpdate: false,
};

FormSupplierCreate.propTypes = {
  onSaveSuccess: PropTypes.func,
  onSaveError: PropTypes.func,
  isUpdate: PropTypes.bool,
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  saveSupplier: SupplierActions.saveSupplier,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSupplierCreate);
