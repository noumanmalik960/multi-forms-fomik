import { Button, Typography } from "@material-ui/core";
import React from "react";
import "fontsource-roboto";
// sweet alert message
import Swal from "sweetalert2";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number | any>>;
  formValues: any | {};
  setFormValues: React.Dispatch<React.SetStateAction<number | any>>;
}

const index: React.FC<Props> = ({ setStep, formValues, setFormValues }) => {
  return (
    <div>
      <br />
      <br />
      <Typography variant="h5" gutterBottom>
        Name: {formValues.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Email: {formValues.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Card Number: {formValues.cardNumber}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Expiry Year: {formValues.expiryYear}
      </Typography>
      <br />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          Swal.fire({
            title: "Success",
            icon: "success",
            confirmButtonText: "Close",
          });

          setStep(0);
          setFormValues({});
        }}
      >
        Submit
      </Button>{" "}
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setStep((step: number) => (step -= 1))}
      >
        Back
      </Button>
    </div>
  );
};
export default index;
