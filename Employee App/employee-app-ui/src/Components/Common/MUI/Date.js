import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const Date = ({ label, fieldName, value, setValue, isDisabled }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          disabled={isDisabled}
          value={dayjs(value[fieldName])}
          onChange={(newValue) => {
            setValue({
              ...value,
              [fieldName]: dayjs(newValue).format("YYYY/MM/DD"),
            });
          }}
          format="DD-MM-YYYY"
          slotProps={{
            textField: {
              error: false,
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Date;
