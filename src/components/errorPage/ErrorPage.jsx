import React from "react";

const ErrorPage = ({ title, message }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{message}</h1>
    </div>
  );
};

export { ErrorPage };
