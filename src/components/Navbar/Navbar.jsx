import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/sign-in");
  };
  return (
    <>
      <div className="flex h-16 w-[100wh] bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-14 justify-between ">
        <div className="flex justify-center items-center gap-4">
          <GiHamburgerMenu />
          Navbar
        </div>
        <div className="flex gap-4 justify-center items-center">
          <span>User john</span>
          <button
            className="flex justify-center h-8 w-8 items-center rounded-full bg-red-400 cursor-pointer"
            onClick={toggleDropdown}
          >
            U
          </button>
          {dropdownVisible && (
            <div className="absolute right-0 mt-20 w-42 bg-white rounded-md shadow-lg z-10 mr-8">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
