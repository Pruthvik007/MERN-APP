import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import Input from "../Components/Common/Input";
import AuthenticationServices from "../Services/AuthenticationServices";
import BackButton from "../Components/Common/BackButton";
const AddUser = () => {
  const authenticationService = AuthenticationServices();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const message = await authenticationService.signUp(user);
    if (message) {
      toast.error(message);
    } else {
      toast.success("User created successfully");
      setUser({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="text-center">
      <Card>
        <Card.Header>
          <h2>Create User</h2>
        </Card.Header>
        <Card.Body className=" d-flex flex-column justify-content-center align-items-center">
          <Input
            type={"text"}
            fieldName={"name"}
            label={"Name"}
            onChange={onUserChange}
            value={user.name}
          />
          <Input
            type={"text"}
            fieldName={"email"}
            label={"Email"}
            onChange={onUserChange}
            value={user.email}
          />
          <Input
            type={"password"}
            fieldName={"password"}
            label={"Password"}
            onChange={onUserChange}
            value={user.password}
          />
          <div className="d-flex flex-row justify-content-center">
            <button className="btn btn-sm btn-primary" onClick={onSubmit}>
              Create
            </button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BackButton />
          </div>
        </Card.Body>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
      />
    </div>
  );
};

export default AddUser;
