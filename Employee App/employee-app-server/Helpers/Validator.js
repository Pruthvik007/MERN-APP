exports.validateEmployee = (employee) => {
  let errorMessage = null;
  if (employee === undefined || employee === null) {
    errorMessage = "Please Enter Employee Details";
  } else if (!(employee.name && employee.name.trim() !== "")) {
    errorMessage = "Name is Required";
  } else if (!(employee.email && employee.email.trim() !== "")) {
    errorMessage = "Email is Required";
  } else if (!(employee.role && employee.role.trim() !== "")) {
    errorMessage = "Role is Required";
  } else if (!(employee.doj && employee.doj.trim() !== "")) {
    errorMessage = "Date Of Joining is Required";
  } else if (!(employee.gender && employee.gender.trim() !== "")) {
    errorMessage = "Gender is Required";
  } else if (!(employee.location && employee.location.trim() !== "")) {
    errorMessage = "Location is Required";
  } else if (!(employee.mobile && employee.mobile !== "")) {
    errorMessage = "Mobile Number is Required";
  } else if (!(employee.status && employee.status.trim() !== "")) {
    errorMessage = "Status is Required";
  }
  return errorMessage;
};

exports.validateUser = (user) => {
  let errorMessage = null;
  if (user === undefined || user === null) {
    errorMessage = "Please Enter User Details";
  } else if (!(user.name && user.name.toString().trim() !== "")) {
    errorMessage = "Name is Required";
  } else if (!(user.email && user.email.toString().trim() !== "")) {
    errorMessage = "Email is Required";
  } else if (!(user.password && user.password.toString().trim() !== "")) {
    errorMessage = "Password is Required";
  }
  return errorMessage;
};
