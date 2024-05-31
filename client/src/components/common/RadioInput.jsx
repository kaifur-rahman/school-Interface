import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { colorScheme } from "../../constants/colorScheme";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function RadioInput({ label, options }) {
  return (
    <FormControl id={label}>
      <Typography sx={{ opacity: "60%", mb: ".5rem", mt: "2rem" }}>
        {label}
      </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="trainingTeamRole"
      >
        {options.map((label) => (
          <FormControlLabel
            key={label}
            value={label}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: colorScheme.primaryOrange,
                  },
                }}
              />
            }
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioInput;
