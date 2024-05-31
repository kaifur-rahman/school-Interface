import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { colorScheme } from "../../../constants/colorScheme";

function RoleCard({ title, description }) {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          rowSpacing={3}
          alignItems="flex-start"
        >
          {/* role icon */}{" "}
          <Grid item>
            <Box
              sx={{
                height: "3rem",
                width: "3rem",
                backgroundColor: colorScheme.primaryOrangeLight,
                borderRadius: "0.15rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {title === "Organization" ? (
                <CorporateFareIcon sx={{ color: colorScheme.primaryOrange }} />
              ) : title === "School" ? (
                <SchoolIcon sx={{ color: colorScheme.primaryOrange }} />
              ) : title === "User" ? (
                <PersonIcon sx={{ color: colorScheme.primaryOrange }} />
              ) : title === "Training Team" ? (
                <GroupsIcon sx={{ color: colorScheme.primaryOrange }} />
              ) : null}
            </Box>
          </Grid>
          {/* role title */}
          <Grid item>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          {/* role description */}
          <Grid item>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              sx={{
                mt: "-1rem",
                color: colorScheme.lightText,
                textAlign: "left",
              }}
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default RoleCard;
