import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Alerts = ({ details }) => {
  const { isVisible, message, type } = details;
  return (
    <>
      {isVisible && (
        <Stack
          sx={{
            position: "fixed",
            top: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            width: "400px",
            zIndex: 9999,
          }}
          spacing={2}
        >
          <Alert variant="filled" severity={type}>
            {message}
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default Alerts;
