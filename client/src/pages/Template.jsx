import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

function Template() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "",
          height: "100vh",
          pt: "1rem",
        }}
      >
        <Outlet></Outlet>
      </Box>
    </>
  );
}

export default Template;
