const STATUS = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  ERROR: "ERROR",
};

exports.getSuccessResponse = (data) => {
  return {
    data: data,
    status: STATUS.SUCCESS,
  };
};

exports.getFailureResponse = (message) => {
  return {
    data: null,
    status: STATUS.FAILURE,
    message: message,
  };
};

exports.getErrorResponse = (error) => {
  return {
    data: null,
    status: STATUS.ERROR,
    message: error.message || "SERVER ERROR",
  };
};
