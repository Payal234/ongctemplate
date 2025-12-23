import React from "react";
import logo from "../assets/logo.jpg"

const Sidebar = ({ user, onConnect, onLogout, onOpenContactUser }) => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen p-6 fixed left-0 top-0">
      <div className="flex items-center mb-6">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-4" />
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>

      {/* Contact User Button */}
      <button
        onClick={onOpenContactUser}
        className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded mb-4 cursor-pointer"
      >
        Contact User
      </button>

        {/* Logout Button */}
      <button
        onClick={onLogout}
        className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
