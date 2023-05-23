import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useEffect, useState } from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { Button, Container, Pagination, Tooltip } from "@mui/material";
import { useBackDrop } from "../Helpers/Context";
import { useAlert } from "../Helpers/Context";
import { useNavigate } from "react-router";
import Validator from "../Helpers/Validator";
const EmployeeList = () => {
  const validator = Validator();
  const { alert } = useAlert();
  const { setIsLoading } = useBackDrop();
  const employeeServices = EmployeeServices();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 5;
  useEffect(() => {
    getEmployees(currentPage);
  }, [currentPage]);

  const getEmployees = async (page) => {
    setIsLoading(true);
    const response = await employeeServices.getEmployees(page);
    setIsLoading(false);
    if (response) {
      if (validator.isSuccess(response)) {
        setEmployees(response.data.employees);
        setTotalPages(response.data.totalPages);
      } else {
        alert(response.message);
      }
    } else {
      alert("Unable To Fetch Employees");
    }
  };

  return (
    <Container>
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
                  {currentPage * perPage - (perPage - index - 1)}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Container
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            setCurrentPage(value);
          }}
        />
      </Container>
    </Container>
  );
};

export default EmployeeList;
