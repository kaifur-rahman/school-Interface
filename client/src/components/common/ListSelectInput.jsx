import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { colorScheme } from "../../constants/colorScheme";

function ListSelectInput({ value, setValue, label, options }) {
  const handleChange = async (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl
        variant="outlined"
        sx={{
          width: { xs: "100%", md: "17rem", lg: "20rem" },
          mt: "2rem",
          mr: "3rem",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colorScheme.primaryOrange,
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: colorScheme.secondaryGrey,
            },
          },
        }}
        size="small"
        id={label}
      >
        <InputLabel id={label} sx={{ fontSize: "0.9rem" }}>
          {label}
        </InputLabel>
        <Select
          labelId={label}
          id={label}
          name={label}
          value={value}
          onChange={handleChange}
          label={label}
        >
          {options.map((obj) => (
            <MenuItem key={obj} value={obj} sx={{ fontSize: "0.7rem" }}>
              {obj}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default ListSelectInput;
