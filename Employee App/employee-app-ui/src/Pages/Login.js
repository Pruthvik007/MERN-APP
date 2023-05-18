import React from "react";
import FormBuilder from "../Components/Common/FormBuilder";
import { generateLoginForm } from "../Helpers/FormHelper";
import { useBackDrop } from "../Helpers/Context";
import { useAlert } from "../Helpers/Context";
import { useNavigate } from "react-router";
import AuthenticationServices from "../Services/AuthenticationServices";
import { Typography } from "@mui/material";
const Login = () => {
  const formItems = generateLoginForm();
  const navigate = useNavigate();
  const { alert } = useAlert();
  const { setIsLoading } = useBackDrop();
  const authenticate = AuthenticationServices();
  const login = async (user) => {
    setIsLoading(true);
    const message = await authenticate.login(user);
    setIsLoading(false);
    if (message) {
      alert(message);
    } else {
      alert("Login Successful", "success");
      navigate("/");
    }
  };

  return (
    <>
      <Typography variant="h4">Login</Typography>
      <FormBuilder
        details={{ email: "admin@admin.com", password: "123123" }}
        formItems={formItems}
        onSubmit={login}
      />
    </>
  );
};

export default Login;
