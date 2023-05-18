const getFormMetaData = (label, fieldName, type, options) => {
  return {
    label: label,
    fieldName: fieldName,
    type: type,
    options: options,
  };
};

export const generateEmployeeForm = () => {
  let formItems = [];
  formItems.push(getFormMetaData("Name", "name", "text"));
  formItems.push(getFormMetaData("Email", "email", "email"));
  formItems.push(getFormMetaData("Location", "location", "text"));
  formItems.push(getFormMetaData("Mobile Number", "mobile", "text"));
  formItems.push(
    getFormMetaData("Status", "status", "dropdown", [
      { label: "Active", value: "A" },
      { label: "Inactive", value: "I" },
    ])
  );
  formItems.push(
    getFormMetaData("Role", "role", "dropdown", [
      { label: "Developer", value: "D" },
      { label: "Tester", value: "T" },
    ])
  );
  formItems.push(
    getFormMetaData("Gender", "gender", "radio", [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" },
    ])
  );
  formItems.push(getFormMetaData("Joining Date", "doj", "date"));
  return formItems;
};

export const generateUserForm = () => {
  let formItems = [];
  formItems.push(getFormMetaData("User Name", "name", "text"));
  formItems.push(getFormMetaData("Email", "email", "email"));
  formItems.push(getFormMetaData("Password", "password", "password"));
  formItems.push(
    getFormMetaData("Confirm Password", "confirmPassword", "password")
  );
  return formItems;
};

export const generateLoginForm = () => {
  let formItems = [];
  formItems.push(getFormMetaData("Email", "email", "email"));
  formItems.push(getFormMetaData("Password", "password", "password"));
  return formItems;
};
