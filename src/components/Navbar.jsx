import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleNav = (e) => {
      // console.log(e);
      if (e.path[1] !== navRef.current) {
        setNav(false);
      }
    };

    document.body.addEventListener("click", handleNav);

    return () => document.body.removeEventListener("click", handleNav);
  }, []);

  return (
    <div className="w-full bg-[#161616] flex items-center justify-between p-4 px-6">
      <div className="flex gap-4 items-center">
        <Link to="/account">
          <div className="flex justify-center items-center w-[34px] h-[34px] bg-[#fff] rounded-full hover:opacity-50">
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-8 h-auto rounded-full object-cover"
              title="Account"
            />
          </div>
        </Link>
        <div className="font-bold text-2xl">Chats</div>

        {/* User's username and Sign Out button */}
        {/* <span>{currentUser.displayName}</span> */}
        {/* <button
          onClick={() => signOut(auth)}
          className="ml-2 p-2 px-4 text-sm bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold"
        >
          Sign Out
        </button> */}
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
