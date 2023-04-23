import React, { useContext, useEffect, useState } from "react";
import Input from "../Components/Common/Input";
import Radio from "../Components/Common/Radio";
import Dropdown from "../Components/Common/Dropdown";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import EmployeeValidator from "../Helpers/EmployeeValidator";
import { useParams } from "react-router";
import EmployeeServices from "../Services/EmployeeServices";
import { useNavigate } from "react-router";
import { MessageContext } from "../Helpers/Context";
import BackButton from "../Components/Common/BackButton";
import Spinner from "../Components/Common/Spinner";

const ViewOrUpdateEmployee = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setMessage } = useContext(MessageContext);
  const navigate = useNavigate();
  const employeeService = EmployeeServices();
  const { employeeId, isEditMode } = useParams();
  const employeeValidator = EmployeeValidator();
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

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const getEmployee = async () => {
    setIsLoading(true);
    const response = await employeeService.getEmployee(employeeId);
    setIsLoading(false);
    if (response.status === "SUCCESS") {
      setEmployee(response.data);
    } else {
      setMessage({
        messageText: "Could not get employee details",
        messageType: "ERROR",
      });
      navigate("/");
    }
  };

  const updateEmployee = async () => {
    setIsLoading(true);
    const message = await employeeService.patchEmployee(employee._id, employee);
    setIsLoading(false);
    if (message) {
      setMessage({ messageText: message, messageType: "ERROR" });
    } else {
      setMessage({
        messageText: "Employee Details Updated Successfully",
        messageType: "SUCCESS",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const submit = () => {
    let errorMessage = employeeValidator.validateEmployee(employee);
    if (errorMessage !== null) {
      setMessage({ messageText: errorMessage, messageType: "ERROR" });
    }
    updateEmployee();
  };

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-center">Employee Details</h1>
          <p>Id: {employeeId}</p>
          <Card className="p-2">
            <Row className="p-3">
              <Input
                type={"text"}
                label={"Name"}
                fieldName={"name"}
                onChange={onChange}
                value={employee.name}
                isEditMode={isEditMode}
              />
              <Input
                type={"text"}
                label={"Email"}
                fieldName={"email"}
                onChange={onChange}
                value={employee.email}
                isEditMode={isEditMode}
              />
              <Input
                type={"text"}
                label={"Role"}
                fieldName={"role"}
                onChange={onChange}
                value={employee.role}
                isEditMode={isEditMode}
              />
              <Input
                type={"date"}
                label={"Date Of Joining"}
                fieldName={"doj"}
                onChange={onChange}
                value={employee.doj}
                isEditMode={isEditMode}
              />
              <Input
                type={"text"}
                fieldName={"mobile"}
                label={"Mobile Number"}
                value={employee.mobile}
                onChange={onChange}
                isEditMode={isEditMode}
              />
              <Input
                type={"text"}
                fieldName={"location"}
                label={"Location"}
                value={employee.location}
                onChange={onChange}
                isEditMode={isEditMode}
              />
              <Radio
                options={[
                  { displayName: "Male", value: "M" },
                  { displayName: "Female", value: "F" },
                ]}
                fieldName="gender"
                label={"Gender"}
                onChange={onChange}
                value={employee.gender}
                isEditMode={isEditMode}
              />
              <Dropdown
                options={[
                  { displayName: "Active", value: "A" },
                  { displayName: "InActive", value: "I" },
                ]}
                fieldName="status"
                label={"Status"}
                onChange={onChange}
                value={employee.status}
                isEditMode={isEditMode}
              />
            </Row>
            <div className="d-flex flex-row justify-content-center">
              {Number(isEditMode) !== 0 && (
                <div className="">
                  <button onClick={submit} className="btn btn-sm btn-primary">
                    Submit
                  </button>
                </div>
              )}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BackButton />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ViewOrUpdateEmployee;
