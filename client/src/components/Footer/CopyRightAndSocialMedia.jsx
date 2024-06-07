import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { colorScheme } from "../../constants/colorScheme";
import { footerSocialIcons } from "../../constants/Data/footer";

function CopyRightAndSocialMedia() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            sx={{
              color: "#ffffff",
              opacity: "60%",
              p: "0.2rem",
              ml: "1rem",
              textAlign: "center",
            }}
          >
            &copy; {currentYear} Spoken Tutorial Job Recommendation System. All
            Rights Reserved.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {footerSocialIcons.map((data) => (
            <Link to={data.url} reloadDocument target="_blank" key={data.title}>
              <IconButton aria-label="delete">
                <Box
                  sx={{
                    color: "#9396A3",
                    width: "1.3rem",
                    "&:hover": {
                      color: colorScheme.primaryOrange,
                    },
                  }}
                >
                  {" "}
                  {data.title === "Facebook" ? (
                    <FacebookRoundedIcon></FacebookRoundedIcon>
                  ) : data.title === "Youtube" ? (
                    <YouTubeIcon />
                  ) : data.title === "LinkedIn" ? (
                    <LinkedInIcon />
                  ) : (
                    "#"
                  )}
                </Box>
              </IconButton>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
export default CopyRightAndSocialMedia;
