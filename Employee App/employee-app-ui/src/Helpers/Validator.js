const Validator = () => {
  function isEmpty(value) {
    const type = typeof value;
    switch (type) {
      case null:
      case undefined:
        return true;
      case "string":
        return value.length === 0;
      case "object":
        return value.length === undefined || Object.keys(value).length === 0;
      default:
        return false;
    }
  }
  function isSuccess(response) {
    if (response && response.status === "SUCCESS") {
      return true;
    }
    return false;
  }
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

  function validateUser(user) {
    let errorMessage = null;
    if (!user) {
      errorMessage = "Enter User Details";
    } else if (!user.name || user.name.trim() === "") {
      errorMessage = "Please Enter User Name";
    } else if (!user.email || user.email.trim() === "") {
      errorMessage = "Please Enter An Email Address";
    } else if (!user.password || user.password.trim() === "") {
      errorMessage = "Please Enter Password";
    } else if (user.password.trim() !== user.confirmPassword.trim()) {
      errorMessage = "Passwords Do Not Match";
    }
    return errorMessage;
  }
  return Object.freeze({ isEmpty, isSuccess, validateEmployee, validateUser });
};

export default Validator;
