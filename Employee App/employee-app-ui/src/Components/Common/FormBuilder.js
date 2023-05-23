import React, { useEffect, useState } from "react";
import Input from "./MUI/Input";
import Dropdown from "./MUI/Dropdown";
import RadioButtonsGroup from "./MUI/RadioButtonsGroup";
import { Box, Button, Container, Grid, Paper, styled } from "@mui/material";
import Date from "./MUI/Date";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FormBuilder = ({
  details,
  formItems,
  onSubmit,
  isFormDisabled = false,
  children,
}) => {
  const initialState = details || {};
  if (!details) {
    formItems?.forEach((item) => (initialState[item.fieldName] = ""));
  }
  const [formValue, setFormValue] = useState(initialState);

  useEffect(() => {
    if (details) {
      setFormValue(details);
    }
  }, [details]);

  const formElement = (item) => {
    if (item.type === "dropdown") {
      return (
        <Dropdown
          {...item}
          value={formValue}
          setValue={setFormValue}
          isDisabled={isFormDisabled}
        />
      );
    } else if (item.type === "radio") {
      return (
        <RadioButtonsGroup
          {...item}
          value={formValue}
          setValue={setFormValue}
          isDisabled={isFormDisabled}
        />
      );
    } else if (item.type === "date") {
      return (
        <Date
          {...item}
          value={formValue}
          setValue={setFormValue}
          isDisabled={isFormDisabled}
        />
      );
    } else {
      return (
        <Input
          {...item}
          value={formValue}
          setValue={setFormValue}
          isDisabled={isFormDisabled}
        />
      );
    }
  };
  return (
    <Container
      sx={{
        paddingTop: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid maxWidth={"sm"} container spacing={2}>
        {formItems?.map((item, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              sm={formItems?.length < 6 ? 12 : 6}
              md={formItems?.length < 6 ? 12 : 6}
              lg={formItems?.length < 6 ? 12 : 6}
              xl={formItems?.length < 6 ? 12 : 6}
            >
              <Item>{formElement(item)}</Item>
            </Grid>
          );
        })}
      </Grid>
      {!isFormDisabled && (
        <Box
          sx={{
            paddingTop: "2rem",
            display: "flex",
            gap: ".3rem",
          }}
        >
          {children}
          <Button
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              onSubmit(formValue);
            }}
          >
            Submit
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default FormBuilder;
