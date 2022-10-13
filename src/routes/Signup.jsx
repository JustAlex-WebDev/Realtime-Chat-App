import React from "react";
import Add from "../images/addAvatar.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="bg-[#f2f2f2] h-[100vh] flex items-center">
      <div className="mx-auto px-12 py-12 bg-[#fff] rounded-2xl">
        <div className="flex flex-col gap-8">
          <span className="text-2xl font-bold text-[#161616] mx-auto">
            Lama Chat
          </span>
          <span className="text-xl font-bold text-[#161616] mx-auto">
            Sign Up
          </span>
        </div>
        <form>
          <div className="my-4">
            <label className="text-[#161616]">Username</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-[#fff] text-[#161616]"
                type="text"
              />
            </div>
          </div>
          <div className="my-4">
            <label className="text-[#161616]">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-[#fff] text-[#161616]"
                type="email"
              />
            </div>
          </div>
          <div className="my-4">
            <label className="text-[#161616]">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-[#fff] text-[#161616]"
                type="password"
              />
            </div>
          </div>
          <div className="my-4">
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-[#fff] text-[#161616] hidden"
                type="file"
                id="file"
              />
            </div>
          </div>
          <label
            htmlFor="file"
            className="flex items-center gap-2 text-[#161616] text-base cursor-pointer my-4 justify-center"
          >
            <img src={Add} alt="" className="w-9" />
            <span>Add an avatar</span>
          </label>
          <button className="w-full my-2 p-3 bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-[#161616]">
          Already have an account?<span> </span>
          <Link className="hover:opacity-50 font-bold" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
