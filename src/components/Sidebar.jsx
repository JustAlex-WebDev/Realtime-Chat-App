import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="md:w-[40%] w-full bg-[#fff] md:h-full h-[50%]">
      <Navbar />
      <Search />
      <div className="overflow-y-scroll chats md:chats2">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
