import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="border-b-2 border-[#f2f2f2]">
      <div className="flex justify-center items-center w-full border-b-2 border-[#f2f2f2]">
        <div className="p-2 py-4 font-semibold text-lg w-[100%]">
          Search Friends
        </div>
        <form className="relative p-2 focus-within:w-full">
          <input
            type="text"
            className="relative bg-[#fff] text-[#161616] w-8 h-8 rounded-full border border-black focus:w-full focus:border-black outline-none cursor-pointer focus:cursor-text pl-8 py-4"
            placeholder="Search a user"
          />
          <AiOutlineSearch
            size={20}
            className="absolute inset-y-0 my-auto ml-[7px] pointer-events-none"
          />
        </form>
      </div>
      <div className="p-2 flex items-center gap-2 cursor-pointer text-[#161616] hover:bg-[#f2f2f2]">
        <img
          src="https://images.pexels.com/photos/14769547/pexels-photo-14769547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div>
          <span className="font-semibold">Jane</span>
          <p className="text-sm opacity-80">Fck you</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
