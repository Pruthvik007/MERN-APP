import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

const RadioButtonsGroup = ({
  label,
  fieldName,
  value,
  setValue,
  options,
  isDisabled,
}) => {
  const handleChange = (event) => {
    setValue({ ...value, [fieldName]: event.target.value });
  };
  return (
    <FormControl
      disabled={isDisabled}
      sx={{
        minWidth: 120,
        width: "100%",
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value[fieldName]}
        onChange={handleChange}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {options?.map((option) => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                checked={value[fieldName] === option.value}
              />
            );
          })}
        </Box>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
