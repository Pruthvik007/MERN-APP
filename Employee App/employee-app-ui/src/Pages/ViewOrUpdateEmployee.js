import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import FormBuilder from "../Components/Common/FormBuilder";
import EmployeeServices from "../Services/EmployeeServices";
import Validator from "../Helpers/Validator";
import { useAlert, useBackDrop } from "../Helpers/Context";
import { generateEmployeeForm } from "../Helpers/FormHelper";
import BackButton from "../Components/Common/BackButton";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../Components/Common/MUI/Modal";
import { validateDate } from "@mui/x-date-pickers/internals";
const ViewOrUpdateEmployee = () => {
  const { alert } = useAlert();
  const validator = Validator();
  const formItems = generateEmployeeForm();
  const { setIsLoading } = useBackDrop();
  const { employeeId, isEditMode } = useParams();
  const navigate = useNavigate();
  const employeeService = EmployeeServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    if (response) {
      if (validator.isSuccess(response)) {
        setEmployee(response.data);
      } else {
        alert(response.message);
        navigate("/");
      }
    } else {
      alert("Unable To Get Employee Details");
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

  const updateEmployee = async (value) => {
    setIsLoading(true);
    const response = await employeeService.patchEmployee(value._id, value);
    setIsLoading(false);
    if (response) {
      if (validator.isSuccess(response)) {
        alert("Employee Details Updated Successfully", "success");
        navigate("/");
      } else {
        alert(response.message);
      }
    } else {
      alert("Unable To Update Employee Details");
    }
  };

  const deleteEmployee = async (id) => {
    setIsLoading(true);
    const response = await employeeService.deleteEmployee(id);
    setIsLoading(false);
    if (response) {
      if (validator.isSuccess(response)) {
        alert("Employee Deleted Successfully");
        navigate("/");
      } else {
        alert(response.message);
      }
    } else {
      alert("Unable To Delete Employee");
    }
  };

  const DeleteConfirmation = () => {
    return (
      <Modal
        title={"Are You Sure You Want to Delete The Employee ?"}
        content={`By Continuing, Employment Details of
          ${employee?.name}
          Will Be Deleted Permanently. This Cannot be Reverted.`}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onConfirm={() => {
          deleteEmployee(employeeId);
        }}
      />
    );
  };

  return (
    <>
      <DeleteConfirmation />
      <FormBuilder
        details={employee}
        formItems={formItems}
        isFormDisabled={Number(isEditMode) === 0}
        onSubmit={(value) => submit(value)}
      >
        <Box
          sx={{
            display: "flex",
            gap: ".2rem",
          }}
        >
          <BackButton />
          <Button
            color="error"
            onClick={() => setIsModalOpen(true)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </FormBuilder>
      {Number(isEditMode) === 0 && <BackButton />}
    </>
  );
};

export default ViewOrUpdateEmployee;
