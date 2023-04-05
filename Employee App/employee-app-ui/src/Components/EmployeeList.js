import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import EmployeeServices from "../Services/EmployeeServices";
import { MessageContext } from "../Helpers/Context";

const EmployeeList = ({ employees }) => {
  const [modalDetails, setModalDetails] = useState({});
  const { setMessage } = useContext(MessageContext);
  const employeeService = EmployeeServices();
  const navigate = useNavigate();
  const deleteEmployee = (id) => {
    const message = employeeService.deleteEmployee(id);
    if (message) {
      setMessage(message);
    } else {
      setMessage("Employee Deleted Successfully");
    }
  };

  const displayModal = (title, content, employeeId) => {
    setModalDetails({
      content: content,
      title: title,
      onConfirm: deleteEmployee,
      employeeId: employeeId,
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={employee._id}>
                <th scope="row">{index+1}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.location}</td>
                <td>
                  <div className="d-flex flex-row justify-content-between w-50">
                    <button
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="View"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        navigate(`/employee/${employee._id}/${0}`);
                      }}
                    >
                      <i className="fa fa-solid fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                      className="btn btn-outline-warning"
                      onClick={() => {
                        navigate(`/employee/${employee._id}/${1}`);
                      }}
                    >
                      <i className="fa fa-solid fa-pencil"></i>
                    </button>
                    <button
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        displayModal(
                          "Delete Employee ?",
                          `Do U Want To Delete Employee: ${employee.name}`,
                          employee._id
                        );
                      }}
                    >
                      <i className="fa fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="exampleModal" className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalDetails.title}</h5>
              <button
                type="button"
                className="close btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{modalDetails.content}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={(e) => {
                  e.preventDefault();
                  modalDetails.onConfirm(modalDetails.employeeId);
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
