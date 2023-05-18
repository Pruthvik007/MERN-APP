import React from "react";
import { generateUserForm } from "../Helpers/FormHelper";
import FormBuilder from "../Components/Common/FormBuilder";
import { Typography } from "@mui/material";
import Validator from "../Helpers/Validator";
import { useAlert } from "../Helpers/Context";
import AuthenticationServices from "../Services/AuthenticationServices";
import { useBackDrop } from "../Helpers/Context";
import { useNavigate } from "react-router";
import BackButton from "../Components/Common/BackButton";
const AddUser = () => {
  const navigate = useNavigate();
  const service = AuthenticationServices();
  const { alert } = useAlert();
  const { setIsLoading } = useBackDrop();
  const validator = Validator();
  const onSubmit = (user) => {
    const errorMessage = validator.validateUser(user);
    if (errorMessage) {
      alert(errorMessage);
    } else {
      addUser(user);
    }
  };
  const addUser = async (user) => {
    setIsLoading(true);
    const responseMessage = await service.signUp(user);
    setIsLoading(false);
    if (responseMessage) {
      alert(responseMessage);
    } else {
      alert("User Added SuccessFully", "success");
      navigate("/");
    }
  };
  let formItems = generateUserForm();
  return (
    <>
      <Typography variant="h4">Add User</Typography>
      <FormBuilder formItems={formItems} onSubmit={(user) => onSubmit(user)} />
      <BackButton />
    </>
  );
};

export default AddUser;
