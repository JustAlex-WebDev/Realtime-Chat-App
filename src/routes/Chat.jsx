import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion as m } from "framer-motion";
import Messages from "../components/Messages";
import Input from "../components/Input";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <m.div
      className="main-div"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ x: "100%", opacity: 1 }}
    >
      <div className="w-full bg-[#161616] border-[#202020] border-b flex items-center justify-between p-4 px-6 h-[82px]">
        <div className="flex gap-4 items-center">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Link to="/">
              <button className="mt-2 hover:opacity-50">
                <IoMdArrowRoundBack />
              </button>
            </Link>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center items-center p-[1px] bg-[#fff] rounded-full hover:opacity-50 hover:cursor-pointer"
          >
            <img
              src={data.user?.photoURL}
              alt=""
              className="w-8 h-8 rounded-full object-cover"
              title="Account"
            />
          </m.div>
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="font-semibold"
          >
            {data.user?.displayName}
          </m.span>
        </div>
      </div>
      <Messages />
      <Input />
    </m.div>
  );
};

export default Chat;
