exports.STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  FAILURE: "FAILURE",
};

exports.getResponse = (data, status, message) => {
  return {
    data: data,
    status: status,
    message: message,
  };
};

exports.getErrorResponse = (message) => {
  return {
    data: null,
    status: "ERROR",
    message: message || "SERVER ERROR",
  };
};
