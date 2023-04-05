import React, { useContext, useEffect, useState } from "react";
import Input from "../Components/Common/Input";
import Radio from "../Components/Common/Radio";
import Dropdown from "../Components/Common/Dropdown";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { ToastContainer, toast } from "react-toastify";
import EmployeeValidator from "../Helpers/EmployeeValidator";
import { useParams } from "react-router";
import EmployeeServices from "../Services/EmployeeServices";
import { useNavigate } from "react-router";
import { MessageContext } from "../Helpers/Context";
import BackButton from "../Components/Common/BackButton";
const ViewOrUpdateEmployee = () => {
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
    const response = await employeeService.getEmployee(employeeId);
    if (response.status === "SUCCESS") {
      setEmployee(response.data);
    } else {
      setMessage("Could not get employee details");
      navigate("/");
    }
  };

  const updateEmployee = async () => {
    const message = await employeeService.patchEmployee(employee._id, employee);
    if (message) {
      toast.error(message);
    } else {
      setMessage("Employee Details Updated Successfully");
      navigate("/");
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const submit = () => {
    let errorMessage = employeeValidator.validateEmployee(employee);
    if (errorMessage !== null) {
      toast.error(errorMessage);
    }
    updateEmployee();
  };

  return (
    <div className="container">
      <h1 className="text-center">Employee Details</h1>
      <p>Id: {employeeId}</p>
      <Card>
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
          <Dropdown
            options={["Active", "InActive"]}
            fieldName="status"
            label={"Status"}
            onChange={onChange}
            value={employee.status}
            isEditMode={isEditMode}
          />
          <Radio
            options={["Male", "Female"]}
            fieldName="gender"
            label={"Gender"}
            onChange={onChange}
            value={employee.gender}
            isEditMode={isEditMode}
          />
        </Row>
        {Number(isEditMode) !== 0 && (
          <div className="p-2 text-center">
            <button onClick={submit} className="btn btn-sm btn-primary">
              Submit
            </button>
          </div>
        )}
        <BackButton />
      </Card>
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

export default ViewOrUpdateEmployee;
