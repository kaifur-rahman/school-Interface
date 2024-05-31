import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RadioInput from "../../common/RadioInput";
import ListSelectInput from "../../common/ListSelectInput";
import { colorScheme } from "../../../constants/colorScheme";

function UserAdditionalDetails({
  userOrg,
  setUserOrg,
  userSchool,
  setUserSchool,
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
        <ListSelectInput
          value={userOrg}
          setValue={setUserOrg}
          label={"Select Organization (If Applicable)"}
          options={["a", "b", "c", "d"]}
        ></ListSelectInput>
        <ListSelectInput
          value={userSchool}
          setValue={setUserSchool}
          label={"Select School (If Applicable)"}
          options={["a", "b", "c", "d"]}
        ></ListSelectInput>
        <RadioInput
          label={"Select Role (Optional)"}
          options={[
            "Organization Cooridnator",
            "School Coordinator",
            "Teacher",
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default UserAdditionalDetails;
