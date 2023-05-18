import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
const BackButton = ({ link = "/" }) => {
  return (
    <Box sx={{ padding: ".2rem" }}>
      <Link to={link}>
        <Button variant="outlined">Back</Button>
      </Link>
    </Box>
  );
};

export default BackButton;
