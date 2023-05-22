import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({
  label,
  fieldName,
  value,
  setValue,
  options = [],
  isDisabled,
}) => {
  const handleChange = (event) => {
    setValue({ ...value, [fieldName]: event.target.value });
  };
  return (
    <>
      <FormControl disabled={isDisabled} sx={{ minWidth: 120, width: "100%" }}>
        <InputLabel>{label}</InputLabel>
        <Select value={value[fieldName]} onChange={handleChange} label={label}>
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {options?.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
