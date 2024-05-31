import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoleCard from "./RoleCard";
import { ButtonBase } from "@mui/material";
import { colorScheme } from "../../../constants/colorScheme";

function SelectRole({ role, setRole }) {
  const dummyData = [
    {
      rolteTitle: "Organization",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      rolteTitle: "School",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      rolteTitle: "User",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      rolteTitle: "Training Team",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const [borderSelected, setBorderSelected] = useState(
    role === "Organization"
      ? 0
      : role === "School"
      ? 1
      : role === "User"
      ? 2
      : role === "Training Team"
      ? 3
      : null
  );
  function handleRoleSelect(index) {
    setRole(dummyData[index].rolteTitle);
    setBorderSelected(index);
  }
  return (
    <>
      <Box sx={{ mt: "2rem" }}>
        <Grid
          container
          justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          {dummyData.map((data, index) => (
            <Grid
              item
              key={data.rolteTitle}
              xs={12}
              sm={12}
              md={6}
              sx={{
                borderStyle: "solid",
                borderColor: "#E3E3E3",
                borderWidth: "0.02rem",
                borderRightWidth: {
                  md: index % 2 === 0 ? "0" : "0.02rem",
                  lg: index % 2 === 0 ? "0" : "0.02rem",
                },
                borderTopLeftRadius: index === 0 ? "0.4rem" : 0,
                borderBottomWidth: {
                  xs: index === dummyData.length - 1 ? "0.02rem" : 0,
                  sm: index === dummyData.length - 1 ? "0.02rem" : 0,
                  md:
                    index === dummyData.length - 1 ||
                    index === dummyData.length - 2
                      ? "0.02rem"
                      : 0,
                },
                borderTopRightRadius: {
                  xs: index === 0 ? "0.4rem" : 0,
                  sm: index === 0 ? "0.4rem" : 0,
                  md: index === 1 ? "0.4rem" : 0,
                },
                borderBottomRightRadius:
                  index === dummyData.length - 1 ? "0.4rem" : 0,
                borderBottomLeftRadius: {
                  xs: index === dummyData.length - 1 ? "0.4rem" : 0,
                  sm: index === dummyData.length - 1 ? "0.4rem" : 0,
                  md: index === dummyData.length - 2 ? "0.4rem" : 0,
                },
              }}
            >
              <ButtonBase
                onClick={() => handleRoleSelect(index)}
                sx={{
                  borderStyle: index === borderSelected ? "solid" : "none",
                  borderColor: colorScheme.primaryOrange,
                  borderWidth: "0.02rem",
                  borderTopLeftRadius: index === 0 ? "0.4rem" : 0,
                  borderTopRightRadius: index === 1 ? "0.4rem" : 0,
                  borderBottomRightRadius:
                    index === dummyData.length - 1 ? "0.4rem" : 0,
                  borderBottomLeftRadius:
                    index === dummyData.length - 2 ? "0.4rem" : 0,
                }}
              >
                <Box sx={{ p: "1.5rem" }}>
                  <RoleCard
                    title={data.rolteTitle}
                    description={data.roleDescription}
                  />
                </Box>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default SelectRole;
