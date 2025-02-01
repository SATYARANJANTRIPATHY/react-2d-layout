import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-grow p-4 overflow-auto mt-16">{children}</div>
      </div>
    </div>
  );
};
