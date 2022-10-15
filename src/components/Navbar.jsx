import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-[#f2f2f2] w-full shadow-md fixed top-0 z-50">
      <div className="main-div flex items-center justify-between h-20 font-bold text-[#161616]">
        <Link to="/">
          <h1 className="text-xl hover:opacity-50">Chatify</h1>
        </Link>
        <div className="hidden md:flex items-center">
          <Link
            to="/signin"
            className="p-4 hover:opacity-50 duration-100 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[#161616] text-[#fff] px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden cursor-pointer z-10 hover:opacity-50">
          <AiOutlineMenu size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
