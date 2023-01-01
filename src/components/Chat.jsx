import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="md:w-[60%] w-full border-black md:border-l-2 border-t-2 md:border-t-0 md:h-full h-[50%]">
      <div className="h-[50px] flex items-center justify-between p-2 text-[#161616] border-black border-b">
        <span className="font-semibold">Jane</span>
        <div className="flex gap-4">
          <BsFillCameraVideoFill
            title="Video"
            size={18}
            className="cursor-pointer opacity-85"
          />
          <HiUserAdd
            title="Add"
            size={18}
            className="cursor-pointer opacity-85"
          />
          <FiMoreHorizontal
            title="More"
            size={18}
            className="cursor-pointer opacity-85"
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;