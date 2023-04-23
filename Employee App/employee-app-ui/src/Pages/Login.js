import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Common/Input";
import Spinner from "../Components/Common/Spinner";
import Card from "react-bootstrap/Card";
import AuthenticationServices from "../Services/AuthenticationServices";
import { MessageContext } from "../Helpers/Context";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setMessage } = useContext(MessageContext);
  const navigate = useNavigate();
  const authenticate = AuthenticationServices();
  const [user, setUser] = useState({
    email: "admin@admin.com",
    password: "123123",
  });
  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const message = await authenticate.login(user);
    setIsLoading(false);
    if (message) {
      setMessage({ messageText: message, messageType: "ERROR" });
    } else {
      setMessage({ messageText: "Login Successful", messageType: "SUCCESS" });
      navigate("/home");
    }
  };
  return (
    <div className="text-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Login;
