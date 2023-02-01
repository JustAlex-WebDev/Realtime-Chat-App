import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="bg-[#000000] h-[100vh] flex items-center">
      <div className="mx-auto px-12 py-12 bg-[#161616] rounded-2xl">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold text-[#fff] mx-auto w-full text-center">
            Coffee Talks
          </span>
          <span className="text-lg font-bold text-[#fff] mx-auto">Sign In</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email" className="text-[#fff]">
              Email
            </label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="email"
                className="w-full p-2 border rounded-2xl bg-[#161616] text-[#fff] outline-none"
                type="email"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="text-[#fff]">
              Password
            </label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="password"
                className="w-full p-2 border rounded-2xl bg-[#161616] text-[#fff] outline-none"
                type="password"
              />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-[#161616] text-white hover:opacity-50 rounded-2xl shadow-xl font-bold border border-[#161616]">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-[#fff]">
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
