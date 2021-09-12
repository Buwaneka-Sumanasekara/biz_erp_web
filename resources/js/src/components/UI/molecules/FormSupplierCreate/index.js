import React, { useEffect, useState,useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Input, Button, Checkbox } from "antd";
import * as SupplierActions from "../../../../redux-states/supplier/actions";

const FormSupplierCreate = (props) => {
  const { SupplierId: passedSupplierId } = props;
  const [isLoading, setLoading] = useState(false);

 const formRef = useRef()

  const [form] = Form.useForm();




  useEffect(() => {
     _loadSupplierDetails(); 
  }, [props.SupplierId]); 


  function _loadSupplierDetails(){
    props.getSpecificSupplier(passedSupplierId).then(res=>{
        console.log(res);
        if(formRef.current){
          formRef.current.setFieldsValue({ name: res.name,contact1:res.contact1,contact2:res.contact2,email_address:res.email_address,active:res.active });
        }
        
    }).catch(er=>{
      console.log(er);
    })
  }

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
console.log(values);
      const PromiseMethod = props.isUpdate
        ? props.updateSupplier(values)
        : props.saveSupplier(values);

      PromiseMethod.then((res) => {
        if(!props.isUpdate){
          form.resetFields();
        }

        props.onSaveSuccess(
          `Supplier ${props.isUpdate ? `updated` : `saved`} successfully`
        );
      })
        .catch((er) => {
          console.log(er);
          props.onSaveError(er.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log("error",error);
      props.onSaveError(error.message);
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
        ref={formRef}
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
  SupplierId:""
};

FormSupplierCreate.propTypes = {
  onSaveSuccess: PropTypes.func,
  onSaveError: PropTypes.func,
  isUpdate: PropTypes.bool,
  SupplierId:PropTypes.string
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  saveSupplier: SupplierActions.saveSupplier,
  updateSupplier:SupplierActions.updateSupplier,
  getSpecificSupplier:SupplierActions.getSpecificSupplier
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSupplierCreate);
