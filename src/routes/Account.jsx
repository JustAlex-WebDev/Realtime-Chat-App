import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Account = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="main-div">
      <div className="w-full bg-[#161616] border-[#202020] border-b flex items-center justify-between p-4 px-6 h-[82px]">
        <div className="flex gap-4 items-center">
          <Link to="/">
            <button className="mt-2">
              <IoMdArrowRoundBack />
            </button>
          </Link>
          <div className="font-bold text-2xl">Me</div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-8 gap-4">
        <div className="flex flex-col p-8 items-center justify-center gap-4">
          <div className="flex justify-center items-center p-[3px] bg-[#fff] rounded-full">
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-28 h-auto rounded-full object-cover"
            />
          </div>
          <span className="text-xl font-semibold">
            {currentUser.displayName}
          </span>
        </div>

        <div className="flex flex-col p-8 items-center justify-center gap-4">
          <div className="flex items-center cursor-pointer hover:opacity-50 font-semibold p-2">
            <HiMoon className="text-xl mr-2 mb-1" />
            <span>Dark Mode</span>
          </div>
          <button
            onClick={() => signOut(auth)}
            className="bg-[#161616] font-bold px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 transition-all"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
