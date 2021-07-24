import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormLogin = (props) => {
  const { children, isLoading } = props;

  function validateName(values) {
    const errors = {};
    if (!values.uname) {
      errors.uname = "Username Required";
    } else if (!values.pass) {
      errors.pass = "Password Required";
    }
    return errors;
  }
  

  return (
    <Formik
      initialValues={{ uname: "", pass: "" }}
      validate={(values) => {
        return validateName(values);
      }}
      onSubmit={(values, actions) => {
        props.onSubmit(values);
      }}
    >
      {(props) => (
        <Form>
          <Field name="uname">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.uname && form.touched.uname}
                pt={2}
              >
                <Input {...field} id="uname" placeholder="Username" />
                <FormErrorMessage>{form.errors.uname}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Field name="pass" >
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.pass && form.touched.pass}
                py={2}
              >
                <Input {...field} type={"password"} id="pass" placeholder="Password" isDisabled={props.isLoading} />
                <FormErrorMessage>{form.errors.pass}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button isLoading={props.isLoading} type="submit"   width="100%">
            Login
          </Button>
        </Form>
      )}
    </Formik>
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
