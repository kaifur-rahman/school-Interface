import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextInput from "../../common/TextInput";
import { colorScheme } from "../../../constants/colorScheme";

function userProfile({
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
}) {
  return (
    <>
      <Grid container sx={{ mb: "1rem" }}>
        {/* user profile details */}

        <Grid item xs={12} sm={12} md={4}>
          {/* left suggestion text */}
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Profile
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            sx={{ color: colorScheme.lightText }}
          >
            This information will be related to your profile.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          {/* right form inputs  */}
          <TextInput
            id={"firstName"}
            label={"First Name"}
            value={firstName}
            setValue={setFirstName}
            required={true}
          ></TextInput>
          <TextInput
            id={"LastName"}
            label={"Last Name"}
            value={lastName}
            required={true}
            setValue={setLastName}
          ></TextInput>
          <TextInput
            id={"email"}
            label={"Email"}
            value={email}
            required={true}
            setValue={setEmail}
            type={"email"}
          ></TextInput>
          <TextInput
            id={"username"}
            label={"Username"}
            value={username}
            setValue={setUsername}
          ></TextInput>
          <TextInput
            id={"password"}
            label={"Password"}
            value={password}
            setValue={setPassword}
            type={"password"}
          ></TextInput>
          <TextInput
            id={"confirmPassword"}
            label={"Confirm Password"}
            value={confirmPassword}
            setValue={setConfirmPassword}
            type={"password"}
          ></TextInput>
          <TextInput
            id={"phone"}
            label={"Phone"}
            value={phone}
            required={true}
            type={"number"}
            setValue={setPhone}
          ></TextInput>
          {signupRole !== "Training Team" ? (
            <TextInput
              id={"dob"}
              value={dob}
              type={"date"}
              label={"DOB"}
              alternateLabel={true}
              setValue={setDob}
            ></TextInput>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}

export default userProfile;
