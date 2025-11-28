import React, { useState } from "react";

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Menu {open ? "▾" : "▴"}
      </button>

      {/* DropDownMenu Menu */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md border">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
