const EmployeeValidator = () => {
  function validateEmployee(employee) {
    let errorMessage = null;
    if (!(employee.name && employee.name.trim() !== "")) {
      errorMessage = "Name is required";
    } else if (!(employee.email && employee.email.trim() !== "")) {
      errorMessage = "Email is required";
    } else if (!(employee.role && employee.role.trim() !== "")) {
      errorMessage = "Role is required";
    } else if (!(employee.doj && employee.doj.trim() !== "")) {
      errorMessage = "Date Of Joining is required";
    } else if (!(employee.gender && employee.gender.trim() !== "")) {
      errorMessage = "Gender is required";
    } else if (!(employee.location && employee.location.trim() !== "")) {
      errorMessage = "Location is required";
    } else if (!(employee.mobile && employee.mobile !== "")) {
      errorMessage = "Mobile Number is required";
    } else if (!(employee.status && employee.status.trim() !== "")) {
      errorMessage = "Status is required";
    }
    return errorMessage;
  }
  return Object.freeze({ validateEmployee });
};

export default EmployeeValidator;