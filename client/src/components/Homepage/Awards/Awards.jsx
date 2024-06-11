import React from "react";
import Box from "@mui/material/Box";
import Marquee from "react-fast-marquee";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { awards } from "../../../constants/Data/awards.js";
import { colorScheme } from "../../../constants/colorScheme";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid } from "@mui/material";
function Awards() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", mb: "1rem", fontWeight: "bold" }}
        >
          Awards & Honors
        </Typography>
        <Box sx={{ mt: "3rem" }}>
          <Marquee
            speed={100}
            gradient={true}
            gradientWidth={isSmallScreen ? 60 : 200}
            pauseOnHover={true}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={10}
              sx={{
                p: "2rem",
              }}
            >
              {awards.map((award) => (
                <Box
                  key={award}
                  sx={{
                    width: "15rem",
                    height: "8rem",
                    backgroundColor: colorScheme.primaryOrangeLight,
                    borderRadius: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 12px -5px " + colorScheme.lightText,
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <Grid container sx={{ width: "100%" }}>
                    <Grid
                      item
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <IconButton aria-label="delete">
                        <OpenInNewIcon
                          sx={{ color: colorScheme.secondaryGrey }}
                        />
                      </IconButton>
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          textAlign: "center",
                          p: "1rem",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          color: colorScheme.primaryOrange,
                        }}
                      >
                        {award}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Marquee>
        </Box>
      </Box>
    </>
  );
}

export default Awards;
