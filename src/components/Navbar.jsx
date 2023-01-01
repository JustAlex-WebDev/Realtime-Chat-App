import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex items-center h-[50px] p-2 justify-between border-b border-black">
      <span className="font-bold text-[#161616]">Coffee Talks</span>
      <div className="flex gap-2 items-center">
        <img
          src={currentUser.photoURL}
          alt=""
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => signOut(auth)}
          className="ml-2 p-2 px-4 text-sm bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
