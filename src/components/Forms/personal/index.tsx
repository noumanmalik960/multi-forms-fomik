import { Button, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number | any>>;
  formValues: any;
  setFormValues: React.Dispatch<React.SetStateAction<number | any>>;
}

interface FormValues {
  name: string;
  email: string;
}

// const initialValues: FormValues = {
//   name: "",
//   email: "",
// };

const formValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, "Too short")
    .max(25, "Too Large")
    .required("Name field can't be empty"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email field can't be empty"),
});

const index: React.FC<Props> = ({ setStep, formValues, setFormValues }) => {
  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={formValidation}
        onSubmit={(values) => {
          setStep((step: number) => (step += 1));
          setFormValues({ ...values });
        }}
      >
        <Form>
          <br />
          <br />
          <Field name="name" as={TextField} label="Name" variant="outlined" />
          <ErrorMessage
            name="name"
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
          />
          <br />
          <br />
          <Field name="email" as={TextField} label="Email" variant="outlined" />
          <ErrorMessage
            name="email"
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
          />
          <br />
          <br />
          <Button color="primary" variant="contained" type="submit">
            Next
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default index;
