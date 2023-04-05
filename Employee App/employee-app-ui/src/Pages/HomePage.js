import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import EmployeeList from "../Components/EmployeeList";
import Pagination from "../Components/Common/Pagination";
import EmployeeServices from "../Services/EmployeeServices";
import { MessageContext } from "../Helpers/Context";
const HomePage = () => {
  const { message, setMessage } = useContext(MessageContext);
  const employeeService = EmployeeServices();
  const employeeData = useSelector((state) => {
    return state.employees;
  });
  let itemsPerPage = 10;
  let pageCount = Math.ceil(employeeData.length / itemsPerPage);
  const [pageNumber, setPageNumber] = useState(0);
  const onChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    if (employeeData.length === 0) {
      employeeService.getEmployees();
    }
  }, []);

  useEffect(() => {
    toast.success(message, {
      toastId: "success1",
    });
    setMessage(null);
  }, [message]);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(
      employeeData.slice(
        pageNumber * itemsPerPage,
        (pageNumber + 1) * itemsPerPage
      )
    );
  }, [itemsPerPage, pageNumber, employeeData]);

  return (
    <div>
      <div>
        <EmployeeList employees={data} />
      </div>
      {data.length>itemsPerPage && <div className="d-flex flex-row-reverse p-3">
        <Pagination pageCount={pageCount} onChange={onChange} />
      </div>}
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

export default HomePage;
