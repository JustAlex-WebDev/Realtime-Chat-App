import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="md:w-[40%] w-full bg-[#fff] md:h-full h-[50%] xlg:rounded-2xl">
      <Navbar />
      <Search />
      <div className="overflow-y-scroll overflow-x-hidden chats md:chats2">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
