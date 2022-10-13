import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#f2f2f2] h-[100vh] flex items-center">
      <div className="mx-auto px-12 py-12 bg-[#fff] rounded-2xl">
        <div className="flex flex-col gap-8">
          <span className="text-2xl font-bold text-[#161616] mx-auto">
            Lama Chat
          </span>
          <span className="text-xl font-bold text-[#161616] mx-auto">
            Sign In
          </span>
        </div>
        <form>
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
          <button className="w-full my-2 p-3 bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-[#161616]">
          Don't have an account?<span> </span>
          <Link className="hover:opacity-50 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
