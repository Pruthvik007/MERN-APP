import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

export default function Checkboxes({
  label,
  fieldName,
  value,
  setValue,
  options,
  isDisabled,
}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </FormGroup>
  );
}
