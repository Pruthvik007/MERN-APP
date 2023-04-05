import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Input from "../Components/Common/Input";
import Card from "react-bootstrap/Card";
import AuthenticationServices from "../Services/AuthenticationServices";
import { MessageContext } from "../Helpers/Context";
const Login = () => {
  const {setMessage}=useContext(MessageContext);
  const navigate = useNavigate();
  const authenticate = AuthenticationServices();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    const message = await authenticate.login(user);
    if (message) {
      toast.error(message);
    } else {
      setMessage("Login Successful");
      navigate("/home");
    }
  };
  return (
    <div className="text-center">
      <h1>Login</h1>
      <div className="container">
        <Card>
          <div className="login-form p-5 d-flex flex-column align-items-center">
            <Input
              type="text"
              fieldName="email"
              label="Email"
              placeholder="Enter your email address"
              value={user.email}
              onChange={onUserChange}
            />
            <Input
              type="password"
              fieldName="password"
              label="Password"
              placeholder="Enter your password"
              value={user.password}
              onChange={onUserChange}
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={(e) => {
                login(e);
              }}
            >
              Submit
            </button>
          </div>
        </Card>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
      />
    </div>
  );
};

export default Login;
