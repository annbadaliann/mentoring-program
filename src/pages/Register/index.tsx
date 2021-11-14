import { useState, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useHistory, useLocation } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import McButton from "../../shared/components/Button";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

import { ESteps, ILocation, IRegisterForm } from "./model";
import constants from "./constants";
import useStyles from "./style";

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

const API_URL = "http://localhost:8000/";

function Register() {
  const [activeStep, setActiveStep] = useState(ESteps.FirstStep);

  const location: ILocation = useLocation();
  const history = useHistory();

  const classes = useStyles();
  const isLastStep = useMemo(
    () => activeStep === ESteps.SecondStep,
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

  const register = (user: any) => {
    const reqOpts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const url = `${API_URL}users`;

    localStorage.setItem("user", JSON.stringify(user));
    return fetch(url, reqOpts).then((res) => res.json());
  };

  const onSubmit = async (data: IRegisterForm) => {
    const res = await register(data);
    if (res) {
      setActiveStep(2);
    }
    // history.push("/");
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid)
      setActiveStep((prevActiveStep) => prevActiveStep + constants.step);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - constants.step);
  };

  const handleGoDashboard = () => {
    history.push('/')
  }

  const getClickHandlerByStep = (step) => {
    switch (step) {
      case ESteps.FirstStep:
        return handleNext;
      case ESteps.SecondStep:
        return handleSubmit(onSubmit);
        case ESteps.ThirdStep:
       return handleGoDashboard
    }
  };

  console.log(activeStep)

  return (
    <Container component="main" maxWidth="xs">
      <Box
        style={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormProvider {...methods}>
          <form style={{ width: "100%" }}>
            <div>{getStepContent(activeStep)}</div>

            <Box display="flex" mt={5}>
              <Box mr={2}>
                <McButton
                  variant="outlined"
                  disabled={activeStep === ESteps.FirstStep}
                  clickHandler={handleBack}
                  width="140px"
                >
                  Back
                </McButton>
              </Box>
              <McButton clickHandler={getClickHandlerByStep(activeStep)}>
                {isLastStep ? "Submit" : "Next"}
              </McButton>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Container>
  );
}

export default Register;
