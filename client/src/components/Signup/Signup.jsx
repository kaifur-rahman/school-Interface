import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectRole from "./Step1/SelectRole";
import SignupForm from "./Step2/SignupForm";
import { colorScheme } from "../../constants/colorScheme";
import { Container } from "@mui/material";

const steps = ["Select Role", "Fill Details"];
const stepStyle = {
  "& .Mui-active": {
    "& .MuiSvgIcon-root": {
      color: colorScheme.tertiaryBlue,
    },
  },
  "& .Mui-completed": {
    "& .MuiSvgIcon-root": {
      color: colorScheme.primaryOrange,
    },
  },
};

export default function Signup() {
  //data
  const [signupRole, setSignupRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [userOrg, setUserOrg] = useState("");
  const [userSchool, setUserSchool] = useState("");
  const [orgName, setOrgName] = useState("");
  const [dateEstablish, setDateEstablish] = useState("");
  const [orgType, setOrgType] = useState("");
  const [parentOrg, setParentOrg] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  // console.log(
  //   signupRole,
  //   firstName,
  //   lastName,
  //   email,
  //   username,
  //   phone,
  //   password,
  //   confirmPassword,
  //   dob,
  //   userSchool,
  //   userOrg
  // );

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    //reset data enetered
    setSignupRole("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setDob("");
    setUserOrg("");
    setUserSchool("");
    setOrgName("");
    setDateEstablish("");
    setOrgType("");
    setParentOrg("");
    setState("");
    setCity("");
    setDistrict("");
    setPinCode("");
    setAddress("");
  };

  return (
    <Container sx={{ width: "100%", pt: "1rem" }}>
      {/* stepper icon and label */}
      <Stepper activeStep={activeStep} alternativeLabel sx={stepStyle}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepOptional(0)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {index === 0 && signupRole !== "" ? signupRole : label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* all steps completed component */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Login</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* Each step body content here */}
          {activeStep === 0 ? (
            // step 1
            <SelectRole role={signupRole} setRole={setSignupRole} />
          ) : activeStep === 1 ? (
            // step 2
            <SignupForm
              signupRole={signupRole}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              dob={dob}
              setDob={setDob}
              userOrg={userOrg}
              setUserOrg={setUserOrg}
              userSchool={userSchool}
              setUserSchool={setUserSchool}
              orgName={orgName}
              setOrgName={setOrgName}
              dateEstablish={dateEstablish}
              setDateEstablish={setDateEstablish}
              orgType={orgType}
              setOrgType={setOrgType}
              parentOrg={parentOrg}
              setParentOrg={setParentOrg}
              state={state}
              setState={setState}
              city={city}
              setCity={setCity}
              district={district}
              setDistrict={setDistrict}
              pinCode={pinCode}
              setPinCode={setPinCode}
              address={address}
              setAddress={setAddress}
            />
          ) : // step 3
          null}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {/* back button */}
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                height: "1.6rem",
                fontSize: "0.8rem",
                borderColor: colorScheme.tertiaryBlue,
                mr: 1,
                mb: "1rem",
              }}
              variant="outlined"
            >
              Back
            </Button>

            {/* next and skip button box */}
            <Box sx={{ flex: "1 1 auto" }} />
            {/* to make skip button active */}

            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            {/* next& reset button */}
            {activeStep === steps.length - 1 ? (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "1.6rem",
                  fontSize: "0.8rem",
                  borderColor: colorScheme.tertiaryBlue,
                  mr: "1rem",
                }}
                onClick={handleReset}
              >
                Reset
              </Button>
            ) : null}

            <Button
              variant="contained"
              size="small"
              sx={{
                height: "1.6rem",
                fontSize: "0.8rem",
                backgroundColor: colorScheme.tertiaryBlue,
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Signup" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Container>
  );
}
