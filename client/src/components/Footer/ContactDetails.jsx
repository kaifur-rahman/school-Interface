import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Grid from "@mui/material/Grid";
import { colorScheme } from "../../constants/colorScheme";
import { footerContactDetails } from "../../constants/Data/footer";

function ContactDetails() {
  return (
    <Box
      sx={{
        mt: "1.5rem",
        display: "flex",
        direction: "col",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={12} md={12}>
          <Box
            sx={{ display: "flex", direction: "row", justifyContent: "center" }}
          >
            <LocationOnRoundedIcon
              sx={{
                color: colorScheme.primaryOrangeLight,
                ml: { xs: "0.5rem", md: 0 },
              }}
            ></LocationOnRoundedIcon>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#ffffff", ml: { xs: "0.5rem", md: "0" } }}
            >
              {footerContactDetails.address}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              direction: "row",
              mt: "0.3rem",
              justifyContent: "center",
            }}
          >
            <CallRoundedIcon
              sx={{ color: colorScheme.primaryOrangeLight }}
            ></CallRoundedIcon>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              {footerContactDetails.phone}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} md={6}>
          <Box sx={{ display: "flex", direction: "row", mt: "0.3rem" }}>
            <EmailRoundedIcon
              sx={{ color: colorScheme.primaryOrangeLight }}
            ></EmailRoundedIcon>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#ffffff", ml: "0.15rem" }}
            >
              {footerContactDetails.email}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactDetails;
