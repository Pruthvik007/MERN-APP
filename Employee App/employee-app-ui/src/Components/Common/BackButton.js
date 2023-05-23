import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const BackButton = ({ link = "/" }) => {
  return (
    <Link to={link}>
      <Button variant="outlined">Back</Button>
    </Link>
  );
};

export default BackButton;
