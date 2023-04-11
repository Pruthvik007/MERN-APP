import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import UserActions from "../Redux/Actions/UserActions";
const Header = () => {
  const userActions = UserActions();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/">
                MERN
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/addEmployee">
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/addUser">
                Add User
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    userActions.logout();
                  }}
                >
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
