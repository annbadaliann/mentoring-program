import { useState, useEffect, useMemo } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { useHistory, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { FormProvider, useForm } from "react-hook-form";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

import constants from "./constants";
import { ESteps, ILocation, IRegisterForm } from "./model";

function getStepContent(step: number) {
  switch (step) {
    case ESteps.FirstStep:
      return <FirstStep />;
    case ESteps.SecondStep:
      return <SecondStep />;
    case ESteps.ThirdStep:
      return <ThirdStep />;
    default:
      return null;
  }
}

function Register() {
  const [activeStep, setActiveStep] = useState(ESteps.FirstStep);

  const location: ILocation = useLocation();
  const history = useHistory();

  const isLastStep = useMemo(
    () => activeStep === ESteps.ThirdStep,
    [activeStep]
  );

  const methods = useForm({
    shouldUnregister: false,
    mode: "onChange",
  });

  const { handleSubmit, trigger } = methods;

  useEffect(() => {
    if (location?.state?.page) {
      setActiveStep(location?.state.page);
    }
  }, [location?.state?.page]);

  const onSubmit = (data: IRegisterForm) => {
    console.log(JSON.stringify(data));
    history.push("/");
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid)
      setActiveStep((prevActiveStep) => prevActiveStep + constants.step);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - constants.step);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormProvider {...methods}>
          <form style={{ width: "100%" }}>
            <div>{getStepContent(activeStep)}</div>

            <Box display="flex" justifyContent="center" mt={5}>
              <Button
                disabled={activeStep === ESteps.FirstStep}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={isLastStep ? handleSubmit(onSubmit) : handleNext}
              >
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Container>
  );
}

export default Register;
