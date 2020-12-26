import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// topbar
import TopBar from "../TopBar/index";
// forms
import PersonalForm from "../Forms/personal/index";
import CardForm from "../Forms/card/index";
import FinalForm from "../Forms/final/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ["Personal Information", "Card Details", "Final step"];
}

function getStepContent(
  stepIndex: number,
  setStep: React.Dispatch<React.SetStateAction<number>>,
  formValues: {} | any,
  setFormValues: React.Dispatch<React.SetStateAction<{}>>
) {
  switch (stepIndex) {
    case 0:
      return (
        <PersonalForm
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 1:
      return (
        <CardForm
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    case 2:
      return (
        <FinalForm
          setStep={setStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();

  return (
    <>
      <TopBar />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {getStepContent(activeStep, setActiveStep, formValues, setFormValues)}
    </>
  );
}
