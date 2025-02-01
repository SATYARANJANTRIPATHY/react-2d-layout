import React from "react";
import { Navigate } from "react-router-dom";

export const AuthCheck = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};
