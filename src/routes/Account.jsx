import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { motion as m } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";

const Account = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <m.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ x: "100%", opacity: 1 }}
      className="main-div"
    >
      <div className="w-full bg-primary border-primary border-b flex items-center justify-between p-4 px-6 h-[82px]">
        <div className="flex gap-4 items-center">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Link to="/">
              <button className="mt-2 hover:opacity-50">
                <IoMdArrowRoundBack />
              </button>
            </Link>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="font-bold text-2xl"
          >
            Me
          </m.div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-8 gap-4">
        <div className="flex flex-col p-8 items-center justify-center gap-4">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center items-center p-[3px] bg-msg rounded-full"
          >
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-28 h-28 rounded-full object-cover"
            />
          </m.div>
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
            className="text-xl font-semibold"
          >
            {currentUser.displayName}
          </m.span>
        </div>

        <div className="flex flex-col p-8 items-center justify-center gap-4">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            <div className="flex items-center cursor-pointer font-semibold p-2">
              <ThemeToggle className="hover:opacity-50" />
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          >
            <button
              onClick={() => signOut(auth)}
              className="bg-button text-button font-bold px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 transition-all"
            >
              Sign Out
            </button>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};

export default Account;
