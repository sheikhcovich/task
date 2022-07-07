import { ErrorOutline } from "@mui/icons-material";
import React from "react";
import "./errors.css";

export const Errors = ({ errors }) => {
  return (
    <div className="main-error-container">
      <div className="errors">
        <ErrorOutline />
        <div className="errors-container">
          <p>{errors.email}</p>
          <p>{errors.username}</p>
          <p>{errors.password}</p>
        </div>
      </div>
    </div>
  );
};
