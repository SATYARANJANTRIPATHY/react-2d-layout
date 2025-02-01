import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const InitialRenderPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setTimeout(() => {
      if (!token) {
        navigate("/sign-in");
      } else {
        navigate("/home");
      }
    }, 1000);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};
