import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmployeeList from "../Components/EmployeeList";
import Pagination from "../Components/Common/Pagination";
import EmployeeServices from "../Services/EmployeeServices";
import Spinner from "../Components/Common/Spinner";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    if(employeeData?.length===0) {
      getEmployees();
    }
  }, []);

  const getEmployees = async () => {
    setIsLoading(true);
    await employeeService.getEmployees();
    setIsLoading(false);
  };

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
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <EmployeeList employees={data} />
          </div>
          {data.length > itemsPerPage && (
            <div className="d-flex flex-row-reverse p-3">
              <Pagination pageCount={pageCount} onChange={onChange} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
