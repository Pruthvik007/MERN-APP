import React, { useContext, useState } from "react";
import Input from "../Components/Common/Input";
import Radio from "../Components/Common/Radio";
import Dropdown from "../Components/Common/Dropdown";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import EmployeeValidator from "../Helpers/EmployeeValidator";
import { useNavigate } from "react-router";
import EmployeeServices from "../Services/EmployeeServices";
import { MessageContext } from "../Helpers/Context";
import BackButton from "../Components/Common/BackButton";
const AddEmployee = () => {
  const { setMessage } = useContext(MessageContext);
  const employeeService = EmployeeServices();
  const navigate = useNavigate();
  const employeeValidator = EmployeeValidator();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
    doj: "",
    gender: "",
    mobile: "",
    location: "",
    status: "Active",
  });

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    let errorMessage = employeeValidator.validateEmployee(employee);
    if (errorMessage !== null) {
      setMessage(errorMessage);
    }
    const responseMessage = await employeeService.addEmployee(employee);
    if (responseMessage) {
      setMessage(responseMessage);
    } else {
      setMessage("Employee Added Successfully");
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Add Employee</h1>
      <Card>
        <Row className="p-3">
          <Input
            type={"text"}
            label={"Name"}
            fieldName={"name"}
            onChange={onChange}
            value={employee.name}
          />
          <Input
            type={"text"}
            label={"Email"}
            fieldName={"email"}
            onChange={onChange}
            value={employee.email}
          />
          <Input
            type={"text"}
            label={"Role"}
            fieldName={"role"}
            onChange={onChange}
            value={employee.role}
          />
          <Input
            type={"date"}
            label={"Date Of Joining"}
            fieldName={"doj"}
            onChange={onChange}
            value={employee.doj}
          />
          <Input
            type={"text"}
            fieldName={"mobile"}
            label={"Mobile Number"}
            value={employee.mobile}
            onChange={onChange}
          />
          <Input
            type={"text"}
            fieldName={"location"}
            label={"Location"}
            value={employee.location}
            onChange={onChange}
          />
          <Radio
            options={["Male", "Female"]}
            fieldName="gender"
            label={"Gender"}
            onChange={onChange}
            value={employee.gender}
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
          />
        </Row>
        <div className="p-2 text-center d-flex flex-row justify-content-center">
          <button onClick={submit} className="btn btn-sm btn-primary">
            Submit
          </button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <BackButton />
        </div>
      </Card>
    </div>
  );
};

export default AddEmployee;
