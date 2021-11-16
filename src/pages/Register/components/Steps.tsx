import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "500px",
    width: "100%",
    margin: "0 auto 60px",
  },
}));

const steps = [
  "Write your credentials",
  "Select your preffered credentials",
  "Choose your mentor from suggested list",
];

const Steps = ({ activeStep }: { activeStep: number }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Steps;
