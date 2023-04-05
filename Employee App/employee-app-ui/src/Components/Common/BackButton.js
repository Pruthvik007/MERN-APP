import React from "react";
import { Link } from "react-router-dom";
const BackButton = ({ to }) => {
  return (
    <div className="text-center">
      <Link to={to || "/"}>
        <button className="btn btn-sm btn-primary">Back</button>
      </Link>
    </div>
  );
};

export default BackButton;
