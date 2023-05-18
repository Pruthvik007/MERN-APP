import React from "react";
import FormBuilder from "../Components/Common/FormBuilder";
import { generateEmployeeForm } from "../Helpers/FormHelper";
import { Box, Typography } from "@mui/material";
import EmployeeServices from "../Services/EmployeeServices";
import Validator from "../Helpers/Validator";
import { useAlert, useBackDrop } from "../Helpers/Context";
import { useNavigate } from "react-router";
import BackButton from "../Components/Common/BackButton";
const AddEmployee = () => {
  const { alert } = useAlert();
  const { setIsLoading } = useBackDrop();
  const navigate = useNavigate();
  const service = EmployeeServices();
  const validator = Validator();
  let formItems = generateEmployeeForm();

  const onSubmit = (employee) => {
    let errorMessage = validator.validateEmployee(employee);
    if (errorMessage) {
      alert(errorMessage);
    } else {
      addEmployee(employee);
    }
  };

  const addEmployee = async (employee) => {
    setIsLoading(true);
    const responseMessage = await service.addEmployee(employee);
    setIsLoading(false);
    if (responseMessage) {
      alert(responseMessage);
    } else {
      alert("Employee Added Successfully", "success");
      navigate("/");
    }
  };

  return (
    <>
      <Typography variant="h4">Add Employee</Typography>
      <FormBuilder
        formItems={formItems}
        onSubmit={(formValue) => onSubmit(formValue)}
        isFormDisabled={false}
      />
      <BackButton />
    </>
  );
};

export default AddEmployee;
