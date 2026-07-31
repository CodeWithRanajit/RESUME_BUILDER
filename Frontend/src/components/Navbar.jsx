import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = { name: "Ranajit Chattaraj" };
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
  };
  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-2.5 py-3.5 text-slate-800 transition-all">
        <Link to="/">
          <img src={logo} alt="logo" className="h-7 w-38 " />
        </Link>
        <div className="flex items-center gap-3 text-sm ">
          <p>Hi, {user?.name ? user.name.split(" ")[0]: "Developer"}</p>
          <button
            onClick={logoutUser}
            className="bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
