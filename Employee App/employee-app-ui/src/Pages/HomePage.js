import React from "react";
import EmployeeList from "../Components/EmployeeList";
import { Container } from "@mui/material";
const HomePage = () => {
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <EmployeeList />
    </Container>
  );
};

export default HomePage;
