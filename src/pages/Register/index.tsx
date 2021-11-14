import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import McButton from "../../shared/components/Button";
import { register } from "../../store/slicers/auth";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

import { ESteps, ILocation, IRegisterForm } from "./model";
import constants from "./constants";
import useStyles from "./style";

import { AppDispatch } from '../../store'

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
  const dispatch = useDispatch<AppDispatch>();

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

  const onSubmit = async (data: IRegisterForm) => {
    const  { meta }  = dispatch(register(data));

    if(meta.requestStatus !== 'fulfilled'){
      return;
    }

    setActiveStep(2);
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

  const getClickHandlerByStep = (step: number) => {
    switch (step) {
      case ESteps.FirstStep:
        return handleNext;
      case ESteps.SecondStep:
        return handleSubmit(onSubmit);
        case ESteps.ThirdStep:
       return handleGoDashboard
    }
  };

  return (
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
  );
}

export default Register;
