import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

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
    <div className="flex items-center h-[50px] p-2 justify-between border-b border-[#f2f2f2]">
      <Link to="/">
        <span className="font-bold text-[#161616]">Coffee Talks</span>
      </Link>
      <div className="flex gap-2 items-center">
        <Link to="/account">
          <img
            src={currentUser.photoURL}
            alt=""
            className="w-8 h-auto rounded-full object-cover"
            title="Account"
          />
        </Link>
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => signOut(auth)}
          className="ml-2 p-2 px-4 text-sm bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold"
        >
          Sign Out
        </button>
      </div>
      {/* <div className="hidden md:flex items-center">
        <Link
          to="/account"
          className="p-2 hover:opacity-50 duration-100 ease-in-out"
        >
          Account
        </Link>
        <button
          onClick={() => signOut(auth)}
          className="bg-[#161616] text-[#fff] px-4 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
        >
          Sign Out
        </button>
      </div> */}

      {/* Menu Icon */}
      {/* <button
        ref={navRef}
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer z-10 hover:opacity-50"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button> */}

      {/* Mobile Menu */}
      {/* <div
        className={
          nav
            ? "navbar md:hidden fixed right-0 top-[52px] flex flex-col items-center justify-between w-[50%] bg-[#fff] text-black shadow-xl z-50 text-lg"
            : "navbar fixed right-[-100%] top-20 flex flex-col items-center justify-between ease-in-out duration-300"
        }
      >
        <ul className="p-4 w-full">
          <li
            onClick={() => setNav(!nav)}
            className="border-b py-6 flex justify-center"
          >
            <Link to="/" className="hover:opacity-50">
              Home
            </Link>
          </li>
          <li
            onClick={() => setNav(!nav)}
            className="border-b py-6 flex justify-center"
          >
            <Link to="/account" className="hover:opacity-50">
              Account
            </Link>
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <button
            onClick={() => setNav(!nav)}
            className="w-full my-2 p-3 bg-button text-button rounded-2xl shadow-md hover:opacity-50"
          >
            Sign Out
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
