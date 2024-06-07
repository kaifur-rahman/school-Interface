import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { colorScheme } from "../../constants/colorScheme";

function FooterMenu({ fTitle, fList }) {
  return (
    <>
      <Typography
        key={fTitle}
        variant="subtitle2"
        gutterBottom
        sx={{
          color: "#ffffff",
          fontWeight: "bold",
          mt: "0.5rem",
          ml: "0.4rem",
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
          },
        }}
      >
        {fTitle}
      </Typography>
      {fList.map((obj) => (
        <>
          <React.Fragment key={obj.title}>
            <Link
              to={obj.url}
              style={{ textDecoration: "none" }}
              key={obj.title}
            >
              <Typography
                variant="caption"
                display="block"
                key={obj.title}
                gutterBottom
                sx={{
                  color: "#ffffff",
                  ml: "0.4rem",
                  mb: "0.5rem",
                  "&:hover": { color: colorScheme.primaryOrange },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                    xl: "left",
                  },
                }}
              >
                {obj.title}
              </Typography>
            </Link>
          </React.Fragment>
        </>
      ))}
    </>
  );
}

export default FooterMenu;
