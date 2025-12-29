import React from "react";
import "./errorPage.css";
const ErrorPage = ({ title, message }) => {
  return (
    <div className="error-page-container">
      <h1>{title}</h1>
      <h1>{message}</h1>
    </div>
  );
};

export { ErrorPage };
