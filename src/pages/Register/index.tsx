import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import { useHistory, useLocation } from "react-router-dom";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { FormProvider, useForm } from "react-hook-form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.mentorcliq.com/?utm_medium=ppc&utm_source=GooglePaid&utm_term=mentor%20click&utm_campaign=&utm_term=mentor%20click&utm_source=adwords&utm_medium=ppc&utm_campaign=MentorcliQ+Brand&hsa_cam=12627705975&hsa_grp=118626682783&hsa_mt=e&hsa_src=g&hsa_ad=509905007658&hsa_acc=7962491732&hsa_net=adwords&hsa_kw=mentor%20click&hsa_tgt=kwd-1211718381833&hsa_ver=3&gclid=CjwKCAiAvriMBhAuEiwA8Cs5lUN0hVXSvizgfw9EAsImMWhaRSB572kMzVdTTc3edm5rZVRH1usZGBoCPvEQAvD_BwE"
      >
        Mentor
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const steps = [1, 2, 3];

function getStepContent(step) {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    default:
      return null;
  }
}

function Register() {
  const [activeStep, setActiveStep] = React.useState(1);

  const location = useLocation();

  React.useEffect(() => {
      if(location?.state?.page){
          setActiveStep(location?.state.page)
      }
  }, [location?.state?.page])

  console.log(location)

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
    history.push("/");
  };

  const methods = useForm({
    shouldUnregister: false,
    mode: "onChange",
  });
  const { handleSubmit, reset, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          <form>
            <div>{getStepContent(activeStep)}</div>
            <Box display="flex" justifyContent="center" mt={5}>
              <Button disabled={activeStep === 1} onClick={handleBack}>
                Back
              </Button>
              {activeStep === 3 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </FormProvider>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

export default Register;
