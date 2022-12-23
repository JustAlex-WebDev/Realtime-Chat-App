import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center h-[50px] p-2 justify-between border-b border-black">
      <span className="font-bold text-[#161616]">Coffee Talks</span>
      <div className="flex gap-2 items-center">
        <img
          src="https://images.pexels.com/photos/14769547/pexels-photo-14769547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>John</span>
        <button className="ml-2 p-2 px-4 text-sm bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
