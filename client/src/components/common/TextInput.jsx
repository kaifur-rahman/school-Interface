/* eslint-disable react/prop-types */
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { colorScheme } from "../../constants/colorScheme";

function TextInput({
  value,
  setValue,
  label,
  id,
  type,
  alternateLabel,
  required,
  style,
}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      {/* alternate label if required */}
      {alternateLabel ? (
        <Typography sx={{ mt: "1.7rem", mb: "-1.7rem", opacity: "60%" }}>
          {label}
        </Typography>
      ) : null}

      <TextField
        id={id}
        name={id}
        label={alternateLabel === true ? "" : label}
        variant="outlined"
        size="small"
        value={value}
        required={required}
        type={type ? type : "text"}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: colorScheme.primaryOrange,
            },
          },
          "& label.Mui-focused": {
            color: "#000000",
          },
          width: { xs: "100%", md: "17rem", lg: "20rem" },
          mr: { xs: 0, md: "3rem" },
          mb: { xs: "1.5rem", md: 0 },
          mt: "2rem",
          ...style,
        }}
      />
    </>
  );
}

export default TextInput;
