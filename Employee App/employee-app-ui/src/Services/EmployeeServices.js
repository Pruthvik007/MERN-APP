import { fetchApi } from "../Utils/Fetch";

const EmployeeServices = () => {
  const addEmployee = async (employee) => {
    return fetchApi("employee/", "POST", employee)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getEmployees = async (page) => {
    return fetchApi(`employee?page=${page}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getEmployee = async (id) => {
    return fetchApi(`employee/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteEmployee = async (id) => {
    return fetchApi(`employee/${id}`, "DELETE")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateEmployee = async (user) => {
    return await fetchApi("employee/", "PUT", user)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const patchEmployee = async (id, user) => {
    return await fetchApi(`employee/${id}`, "PATCH", user)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return Object.freeze({
    addEmployee,
    getEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee,
    patchEmployee,
  });
};
export default EmployeeServices;
