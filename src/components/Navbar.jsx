import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full bg-[#161616] border-[#202020] border-b flex items-center justify-between p-4 px-6">
      <Link to="/account">
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center p-[1px] bg-[#fff] rounded-full hover:opacity-50 hover:cursor-pointer">
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-8 h-auto rounded-full object-cover"
              title="Account"
            />
          </div>
          <div className="font-bold text-2xl">Chats</div>
        </div>
      </Link>
      <Search />
    </div>
  );
};

export default Navbar;
