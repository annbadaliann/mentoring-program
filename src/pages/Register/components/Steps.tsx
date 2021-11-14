import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Write your credentials",
  "Select your preffered credentials",
  "Choose your mentor from suggested list",
];

const Steps = ({activeStep}: {activeStep: number}) => {
  return (
    <Box sx={{ width: "500px", mb: "60px" }}>
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
