import { Button, TextField } from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number | any>>;
  formValues: {};
  setFormValues: React.Dispatch<React.SetStateAction<number | any>>;
}

// interface FormValues {
//   cardHolder: string;
//   cardNumber: string;
// }

// const initialValues = {
//   cardHolder: "",
//   cardNumber: "",
// };

const formValidation = yup.object().shape({
  expiryYear: yup.number().required("Required Field"),
  cardNumber: yup
    .string()
    .required("Required Field")
    .max(14, "Should be exaclty 14 characters"),
});

const index: React.FC<Props> = ({ setStep, formValues, setFormValues }) => {
  return (
    <div>
      <Formik
        initialValues={formValues}
        validationSchema={formValidation}
        onSubmit={(values) => {
          setStep((step: number) => (step += 1));
          setFormValues((prevValues: any) => {
            return { ...prevValues, ...values };
          });
        }}
      >
        <Form>
          <br />
          <br />
          <Field
            as={TextField}
            label="Expiry Year"
            name="expiryYear"
            variant="outlined"
            size="small"
          />
          <ErrorMessage
            name="expiryYear"
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
          />
          <br />
          <br />
          <Field
            as={TextField}
            label="Card Number"
            name="cardNumber"
            variant="outlined"
            size="small"
          />
          <ErrorMessage
            name="cardNumber"
            render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
          />
          <br />
          <br />
          <Button color="primary" variant="contained" type="submit">
            Next
          </Button>{" "}
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setStep((step: number) => (step -= 1))}
          >
            Back
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default index;
