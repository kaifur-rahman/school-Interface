import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import UserProfile from "./UserProfile";
import SchoolOrgProfile from "./SchoolOrgProfile";
import TrainingTeamAdditionalDetails from "./TrainingTeamAdditionalDetails";
import UserAdditionalDetails from "./UserAdditionalDetails";

function SignupForm({
  signupRole,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  dob,
  setDob,
  phone,
  setPhone,
  userOrg,
  setUserOrg,
  userSchool,
  setUserSchool,
  orgName,
  setOrgName,
  dateEstablish,
  setDateEstablish,
  orgType,
  setOrgType,
  parentOrg,
  setParentOrg,
  state,
  setState,
  city,
  setCity,
  district,
  setDistrict,
  pinCode,
  setPinCode,
  address,
  setAddress,
}) {
  return (
    <Box sx={{ mt: "2rem" }}>
      {/* user profile details */}
      <UserProfile
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
      ></UserProfile>
      <Divider sx={{ mt: "2rem", mb: "1rem" }} />

      {/* additional details */}
      {signupRole === "Organization" || signupRole === "School" ? (
        <SchoolOrgProfile
          signupRole={signupRole}
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
      ) : signupRole === "User" ? (
        <UserAdditionalDetails
          userSchool={userSchool}
          setUserSchool={setUserSchool}
          userOrg={userOrg}
          setUserOrg={setUserOrg}
        />
      ) : signupRole === "Training Team" ? (
        <TrainingTeamAdditionalDetails />
      ) : null}
    </Box>
  );
}

export default SignupForm;
