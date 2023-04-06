const {
  getErrorResponse,
  getFailureResponse,
} = require("./ResponseHelper");
const prepareErrorMessage = (error) => {
  let errors = {};
  Object.keys(error.errors).forEach((key) => {
    errors[key] = error.errors[key].message;
  });
  let message = "";
  Object.keys(errors).forEach((key) => {
    message += errors[key] + " ";
  });
  return message;
};

exports.handleError = (error, req, res, next) => {
  let response = {};
  if (error) {
    if (error.name === "ValidationError") {
      let message = prepareErrorMessage(error);
      response = getFailureResponse(message);
    } else if (error.code === 11000) {
      response = getFailureResponse("Email Is Already Registered");
    } else {
      response = getErrorResponse(error);
    }
    res.status(200).json(response);
  }
};
