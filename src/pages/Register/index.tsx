import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import McButton from "../../shared/components/Button";
import { registerUser } from "../../store/slicers/auth";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

import { ESteps, ILocation, IRegisterForm } from "./model";
import constants from "./constants";
import useStyles from "./style";

import { AppDispatch } from "../../store";
import Steps from "./components/Steps";
import { selectSuggestedMentors } from "../../store/slicers/mentors";

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
  const suggesteMentors = useSelector(selectSuggestedMentors);

  const location: ILocation = useLocation();
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const classes = useStyles();

  const isLastStep = useMemo(
    () => activeStep === ESteps.ThirdStep,
    [activeStep]
  );

  const methods = useForm({
    shouldUnregister: false,
    mode: "all",
  });

  const { handleSubmit, trigger } = methods;

  useEffect(() => {
    if (location?.state?.page) {
      setActiveStep(location?.state.page);
    }
  }, [location?.state?.page]);

  const onSubmit = useCallback(
    async (data: IRegisterForm) => {
      const res = dispatch(registerUser({ ...data, selectedMentors: [] }));

      if (res) {
        setActiveStep(ESteps.ThirdStep);
        // history.push('/')
      }
    },
    [dispatch]
  );

  const goSecondStep = useCallback(async () => {
    const isStepValid = await trigger();

    if (isStepValid)
      setActiveStep((prevActiveStep) => prevActiveStep + constants.step);
  }, [trigger]);


  const goThirdStep = useCallback(async () => {
    const isStepValid = await trigger();
    if (isStepValid)
      setActiveStep((prevActiveStep) => prevActiveStep + constants.step);
  }, [trigger]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - constants.step);
  };

  const getClickHandlerByStep = useCallback(
    (step: number) => {
      switch (step) {
        case ESteps.FirstStep:
          return goSecondStep;
        case ESteps.SecondStep:
          return goThirdStep;
        case ESteps.ThirdStep:
          return handleSubmit(onSubmit);
      }
    },
    [goSecondStep, goThirdStep, handleSubmit, onSubmit]
  );

  return (
    <Box
      style={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Steps activeStep={activeStep} />
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <FormProvider {...methods}>
        <form style={{ width: "100%" }}>
          <div>{getStepContent(activeStep)}</div>

          <Box display="flex" justifyContent="center" mt={5}>
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
            <McButton clickHandler={getClickHandlerByStep(activeStep)} disabled={!suggesteMentors.length && isLastStep}>
              {isLastStep ? "Submit" : "Next"}
            </McButton>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
}

export default Register;
