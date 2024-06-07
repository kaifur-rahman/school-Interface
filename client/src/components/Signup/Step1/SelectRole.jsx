import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoleCard from "./RoleCard";
import { ButtonBase } from "@mui/material";
import { colorScheme } from "../../../constants/colorScheme";
import { useNavigate } from "react-router-dom";

function SelectRole({ role, setRole }) {
  const dummyData = [
    {
      roleTitle: "Organization",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      roleTitle: "School",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      roleTitle: "User",
      roleDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      roleTitle: "Training Team",
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
  const navigate = useNavigate();
  useEffect(() => {
    if (role != null) {
      let index;
      if (role === "Organization") {
        index = 0;
      } else if (role === "School") {
        index = 1;
      } else if (role === "User") {
        index = 2;
      } else if (role === "Training Team") {
        index = 3;
      } else {
        index = null;
      }
      if (index != null) {
        handleRoleSelect(index);
      }
    }
  }, [role]);

  function handleRoleSelect(index) {
    const role = dummyData[index].roleTitle;

    if (role === "Training Team") {
      navigate("/signup/training-team");
    } else {
      navigate("/signup/" + role.toLowerCase());
    }
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
              key={data.roleTitle}
              xs={12}
              sm={12}
              md={6}
              sx={{
                borderStyle: "solid",
                borderColor: "#E3E3E3",
                borderWidth: "0.02rem",
                boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.5)",
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
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  transform: index === borderSelected ? null : "scale(1.01)",
                  borderColor:
                    index === borderSelected ? null : colorScheme.primaryOrange,
                  borderWidth: index === borderSelected ? null : "0.1rem",
                },
              }}
            >
              <ButtonBase
                onClick={() => handleRoleSelect(index)}
                sx={{
                  borderStyle: index === borderSelected ? "solid" : "none",
                  borderColor: colorScheme.primaryOrange,
                  borderWidth: "0.1rem",
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
                    title={data.roleTitle}
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
