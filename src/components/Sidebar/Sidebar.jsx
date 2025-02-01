import React from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  let navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex h-[100vh] w-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 justify-center">
      <div className="grid h-[50vh] mt-12">
        <button onClick={() => handleNavigate("/home")}>Home</button>
        <button onClick={() => handleNavigate("/")}>Dashboard</button>
        <button onClick={() => handleNavigate("/profile")}>Profile</button>
        <button onClick={() => handleNavigate("/")}>Cart</button>
        <button onClick={() => handleNavigate("/")}>Invoice</button>
      </div>
    </div>
  );
};
