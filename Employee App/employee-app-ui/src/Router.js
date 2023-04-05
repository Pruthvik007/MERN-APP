import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import AddEmployee from "./Pages/AddEmployee";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ViewOrUpdateEmployee from "./Pages/ViewOrUpdateEmployee";
import AddUser from "./Pages/AddUser";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import { MessageContext } from "./Helpers/Context";
import PageNotFound from "./Pages/PageNotFound";
const Router = () => {
  const user = useSelector((state) => {
    return state.user;
  });
  const [message, setMessage] = useState();

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <BrowserRouter>
        {user ? (
          <>
            <Header />
            <Routes>
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
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
    </MessageContext.Provider>
  );
};

export default Router;