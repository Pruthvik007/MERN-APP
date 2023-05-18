import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import AddEmployee from "./Pages/AddEmployee";
import Login from "./Pages/Login";
import ViewOrUpdateEmployee from "./Pages/ViewOrUpdateEmployee";
import AddUser from "./Pages/AddUser";
import Header from "./Components/Common/Header";
import { useSelector } from "react-redux";
import PageNotFound from "./Pages/PageNotFound";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "./Helpers/Context";
const Router = () => {
  const { isDarkTheme } = useTheme();
  const user = useSelector((state) => {
    return state.user;
  });

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {user ? (
          <>
            <Header />
            <Routes>
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route
                path="/employee/:employeeId/:isEditMode"
                element={<ViewOrUpdateEmployee />}
              />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/*" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
