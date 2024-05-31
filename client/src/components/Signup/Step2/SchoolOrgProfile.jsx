import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextInput from "../../common/TextInput";
import { colorScheme } from "../../../constants/colorScheme";
import ListSelectInput from "../../common/ListSelectInput";

function SchoolOrgProfile({
  signupRole,
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
    <Grid container sx={{ mb: "1rem", mt: "2rem" }}>
      {/* user profile details */}

      <Grid item xs={12} sm={12} md={4}>
        {/* left suggestion text */}
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Additional Details
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
          id={orgName}
          label={signupRole + " Name"}
          value={orgName}
          setValue={setOrgName}
          required={true}
        />
        <TextInput
          id={dateEstablish}
          label={"Date of Establishment"}
          type={"date"}
          alternateLabel={true}
          value={dateEstablish}
          setValue={setDateEstablish}
          required={true}
        />
        <ListSelectInput
          value={orgType}
          setValue={setOrgType}
          label={"Type"}
          options={["a", "b", "c", "d"]}
        />
        <ListSelectInput
          value={parentOrg}
          setValue={setParentOrg}
          label={"Parent Organization"}
          options={["a", "b", "c", "d"]}
        />
        <ListSelectInput
          value={state}
          setValue={setState}
          label={"State"}
          options={["a", "b", "c", "d"]}
        />
        <ListSelectInput
          value={city}
          setValue={setCity}
          label={"City"}
          options={["a", "b", "c", "d"]}
        />
        <ListSelectInput
          value={district}
          setValue={setDistrict}
          label={"District"}
          options={["a", "b", "c", "d"]}
        />
        <TextInput
          id={"pinCode"}
          label={"Pincode"}
          value={pinCode}
          type={"number"}
          setValue={setPinCode}
        />
        <TextInput
          id={"address"}
          label={"Address"}
          value={address}
          setValue={setAddress}
        />
      </Grid>
    </Grid>
  );
}

export default SchoolOrgProfile;
