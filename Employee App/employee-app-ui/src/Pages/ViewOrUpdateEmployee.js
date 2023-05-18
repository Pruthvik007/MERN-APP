import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import FormBuilder from "../Components/Common/FormBuilder";
import EmployeeServices from "../Services/EmployeeServices";
import Validator from "../Helpers/Validator";
import { useAlert, useBackDrop } from "../Helpers/Context";
import { generateEmployeeForm } from "../Helpers/FormHelper";
const ViewOrUpdateEmployee = () => {
  const { alert } = useAlert();
  const validator = Validator();
  const formItems = generateEmployeeForm();
  const { setIsLoading } = useBackDrop();
  const { employeeId, isEditMode } = useParams();
  const navigate = useNavigate();
  const employeeService = EmployeeServices();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
    doj: "",
    gender: "",
    mobile: "",
    location: "",
    status: "",
  });

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    setIsLoading(true);
    const response = await employeeService.getEmployee(employeeId);
    setIsLoading(false);
    if (response.status === "SUCCESS") {
      setEmployee(response.data);
    } else {
      alert("Unable To Get Employee Details");
      navigate("/");
    }
  };

  const updateEmployee = async (value) => {
    setIsLoading(true);
    const message = await employeeService.patchEmployee(value._id, value);
    setIsLoading(false);
    if (message) {
      alert("Unable To Update Employee Details");
    } else {
      alert("Employee Details Updated Successfully", "success");
      navigate("/");
    }
  };
  const submit = (employee) => {
    let errorMessage = validator.validateEmployee(employee);
    if (errorMessage !== null) {
      alert(errorMessage);
    } else {
      updateEmployee(employee);
    }
  };

  return (
    <>
      ViewOrUpdateEmployee
      <FormBuilder
        details={employee}
        formItems={formItems}
        isFormDisabled={Number(isEditMode) === 0}
        onSubmit={(value) => submit(value)}
      />
    </>
  );
};

export default ViewOrUpdateEmployee;
