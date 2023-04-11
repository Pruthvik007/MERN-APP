import React from "react";
import Form from "react-bootstrap/Form";
const Radio = ({ label, options, fieldName, onChange, value, isEditMode }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <React.Fragment>
      <Form.Group className="mb-3 col-lg-6">
        <Form.Label htmlFor={label}>{label}</Form.Label>
        <div className="border rounded p-1">
          {options.map((option) => {
            return (
              <Form.Check
                key={option}
                type="radio"
                label={option}
                name={fieldName}
                value={option}
                checked={value === option}
                onChange={handleChange}
                disabled={Number(isEditMode) === 0}
              />
            );
          })}
        </div>
      </Form.Group>
    </React.Fragment>
  );
};

export default Radio;
