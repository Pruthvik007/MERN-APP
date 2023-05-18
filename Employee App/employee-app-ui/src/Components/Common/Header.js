import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./MUI/NavBar";
import ThemeSwitch from "./MUI/ThemeSwitch";
import { useTheme } from "../../Helpers/Context";
import UserActions from "../../Redux/Actions/UserActions";
const Header = () => {
  const actions = UserActions();
  const { setIsDarkTheme, isDarkTheme } = useTheme();
  return (
    <NavBar>
      <div>
        <Button color="inherit" component={Link} to={"/"}>
          Home
        </Button>
        <Button color="inherit" component={Link} to={"/add-employee"}>
          Add Employee
        </Button>
        <Button color="inherit" component={Link} to={"/add-user"}>
          Add User
        </Button>
      </div>
      <div>
        <ThemeSwitch
          checked={isDarkTheme}
          onChange={() => {
            setIsDarkTheme((theme) => !theme);
          }}
        />
        <Button
          color="inherit"
          onClick={(e) => {
            e.preventDefault();
            actions.logout();
          }}
        >
          Logout
        </Button>
      </div>
    </NavBar>
  );
};

export default Header;
