const Validator = () => {
  function isSuccess (response) {
    if (response && response.status === "SUCCESS") {
      return true;
    }
    return false;
  };
  return Object.freeze({ isSuccess });
};

export default Validator;
