import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = ({ user }) => {
  return (
    // <div className="md:w-[40%] w-full bg-[#fff] md:h-full h-[50%] xlg:rounded-2xl">
    //   <Navbar />
    //   <Search />
    //   <div className="overflow-y-scroll overflow-x-hidden chats md:chats2">
    //     <Chats />
    //   </div>
    // </div>

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
