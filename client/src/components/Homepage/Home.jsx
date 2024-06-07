import React from "react";
import Box from "@mui/material/Box";
function Home() {
  return (
    <>
      <Box id="home" sx={{ height: "20rem", backgroundColor: "" }}>
        Homepage
      </Box>

      <Box id="forum" sx={{ height: "20rem", backgroundColor: "" }}>
        Forum
      </Box>
      <Box id="feedback" sx={{ height: "20rem", backgroundColor: "" }}>
        Feedback
      </Box>
      <Box id="testimonials" sx={{ height: "20rem", backgroundColor: "" }}>
        Testimonials
      </Box>
      <Box id="collaborate" sx={{ height: "20rem", backgroundColor: "" }}>
        Collaborate
      </Box>
    </>
  );
}

export default Home;
