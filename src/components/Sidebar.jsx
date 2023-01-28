import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = ({ user }) => {
  return (
    <div
      className={`${
        user ? "sidebarWithUser w-full" : "sidebarWithoutUser w-full"
      }`}
    >
      <div className="overflow-y-scroll overflow-x-hidden w-full h-full">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
