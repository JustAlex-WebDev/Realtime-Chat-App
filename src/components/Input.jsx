import React from "react";
import { IoMdAttach } from "react-icons/io";
import { AiOutlineFileImage } from "react-icons/ai";

const Input = () => {
  return (
    <div className="h-[75px] bg-[#f2f2f2] p-2 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type something..."
        className="w-[50%] p-2 border rounded-2xl bg-[#fff] text-[#161616]"
      />
      <div className="flex items-center gap-4">
        <IoMdAttach size={18} className="cursor-pointer" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <AiOutlineFileImage size={18} className="cursor-pointer" />
        </label>
        <button className="p-2 px-4 text-sm bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
