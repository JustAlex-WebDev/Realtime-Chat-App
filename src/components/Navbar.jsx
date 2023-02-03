import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";
import { motion as m } from "framer-motion";

const Navbar = ({ user, setUser }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="w-full bg-secondary border-primary border-b flex items-center justify-between p-4 px-6">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex gap-4 items-center"
        >
          <Link to="/account">
            <div className="flex justify-center items-center p-[1px] bg-button rounded-full hover:opacity-50 hover:cursor-pointer">
              <img
                src={currentUser.photoURL}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
                title="Account"
              />
            </div>
          </Link>
          <div className="font-bold text-2xl">Chats</div>
        </m.div>
      </div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
      >
        <Search user={user} setUser={setUser} />
      </m.div>
    </div>
  );
};

export default Navbar;
