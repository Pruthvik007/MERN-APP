import FormSelect from "react-bootstrap/FormSelect";
import Form from "react-bootstrap/Form";
import React from "react";
const Dropdown = ({ options, label, onChange, fieldName, value, isEditMode }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <React.Fragment>
      <Form.Group className="col-lg-6">
        <Form.Label>{label}</Form.Label>
        <FormSelect onChange={handleChange} value={value} disabled={Number(isEditMode) === 0}>
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>;
          })}
        </FormSelect>
      </Form.Group>
    </React.Fragment>
  );
};

export default Dropdown;
