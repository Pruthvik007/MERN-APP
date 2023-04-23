import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Input from "../Components/Common/Input";
import AuthenticationServices from "../Services/AuthenticationServices";
import BackButton from "../Components/Common/BackButton";
import Spinner from "../Components/Common/Spinner";
import { MessageContext } from "../Helpers/Context";

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setMessage } = useContext(MessageContext);
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
    setIsLoading(true);
    const message = await authenticationService.signUp(user);
    setIsLoading(false);
    if (message) {
      setMessage({ messageText: message, messageType: "ERROR" });
    } else {
      setMessage({
        messageText: "User Added Successfully",
        messageType: "SUCCESS",
      });
      setUser({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="text-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default AddUser;
