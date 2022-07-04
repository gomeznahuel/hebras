import React from "react";
import { NavLink } from "react-router-dom";

const ErrorNotFound = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Page not found</p>
      <p>
        <NavLink to="/">Back to home</NavLink>
      </p>
    </div>
  );
};

export default ErrorNotFound;
