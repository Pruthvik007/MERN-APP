import React from "react";
import Form from "react-bootstrap/Form";
const Input = ({ onChange, label, fieldName, type, value, isEditMode }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <React.Fragment>
      <Form.Group className="col-lg-6">
      <div className="form-floating mb-3">
        <Form.Control
          id={fieldName}
          type={type}
          placeholder="p"
          name={fieldName}
          onChange={handleChange}
          value={value}
          disabled={Number(isEditMode)===0}
        />
        <Form.Label htmlFor={fieldName}>{label}</Form.Label>
        </div>
      </Form.Group>
    </React.Fragment>
  );
};

export default Input;
