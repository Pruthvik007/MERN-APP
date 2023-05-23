import React from "react";
import FormBuilder from "../Components/Common/FormBuilder";
import { generateEmployeeForm } from "../Helpers/FormHelper";
import { Typography } from "@mui/material";
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
    const response = await service.addEmployee(employee);
    setIsLoading(false);
    if (response) {
      if (validator.isSuccess(response)) {
        alert("Employee Added Successfully", "success");
        navigate("/");
      } else {
        alert(response.message);
      }
    } else {
      alert("Unable To Add Employee");
    }
  };

  return (
    <div>
      <Typography variant="h4">Add Employee</Typography>
      <FormBuilder
        formItems={formItems}
        onSubmit={(formValue) => onSubmit(formValue)}
        isFormDisabled={false}
      >
        <BackButton />
      </FormBuilder>
    </div>
  );
};

export default AddEmployee;
