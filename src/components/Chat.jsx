import React, { useContext } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="md:w-[60%] w-full border-black md:border-l-2 border-t-2 md:border-t-0 md:h-full h-[67%]">
      <div className="h-[50px] flex items-center justify-between p-2 text-[#161616] border-black border-b">
        <span className="font-semibold">{data.user?.displayName}</span>
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
