import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { Button, Container, Tooltip } from "@mui/material";
import { useBackDrop } from "../Helpers/Context";
import { useAlert } from "../Helpers/Context";
import { useNavigate } from "react-router";
import Modal from "./Common/MUI/Modal";
const EmployeeList = () => {
  const { alert } = useAlert();
  const { setIsLoading } = useBackDrop();
  const employeeServices = EmployeeServices();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeForDeletion, setEmployeeForDeletion] = useState();
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    if (employees.length === 0) {
      setIsLoading(true);
      const message = await employeeServices.getEmployees();
      if (message) {
        alert(message);
      }
      setIsLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    setIsLoading(true);
    const responseMessage = await employeeServices.deleteEmployee(id);
    setIsLoading(false);
    if (responseMessage) {
      alert(responseMessage);
    } else {
      alert("Employee Deleted Successfully", "success");
    }
  };

  const DeleteConfirmation = () => {
    return (
      <Modal
        title={"Are You Sure You Want to Delete The Employee ?"}
        content={`By Continuing, Employment Details of
          ${employeeForDeletion?.name}
          Will Be Deleted Permanently. This Cannot be Reverted.`}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onConfirm={() => {
          deleteEmployee(employeeForDeletion?._id);
        }}
      />
    );
  };

  return (
    <Container>
      <DeleteConfirmation />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, overflowX: "auto" }}
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell align="center">Employee Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((employee, index) => (
              <TableRow
                key={employee._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{employee.name}</TableCell>
                <TableCell align="center">{employee.email}</TableCell>
                <TableCell align="center">{employee.location}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => navigate(`/employee/${employee._id}/0`)}
                  >
                    <Tooltip title="View">
                      <RemoveRedEyeIcon />
                    </Tooltip>
                  </Button>
                  <Button
                    onClick={() => navigate(`/employee/${employee._id}/1`)}
                  >
                    <Tooltip title="Edit">
                      <ModeEditIcon />
                    </Tooltip>
                  </Button>
                  <Button
                    onClick={() => {
                      setEmployeeForDeletion(employee);
                      setIsModalOpen(true);
                    }}
                  >
                    <Tooltip title="Delete">
                      <DeleteIcon />
                    </Tooltip>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EmployeeList;
