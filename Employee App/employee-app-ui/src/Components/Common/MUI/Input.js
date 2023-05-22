import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Input = ({ label, fieldName, value, setValue, isDisabled, type }) => {
  const handleChange = (event) => {
    setValue({ ...value, [fieldName]: event.target.value });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={value[fieldName]}
        onChange={handleChange}
        disabled={isDisabled}
        type={type}
      />
    </Box>
  );
};

export default Input;
