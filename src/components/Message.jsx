import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import moment from "moment";
import { motion as m } from "framer-motion";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      className={`${
        message.senderId === currentUser.uid
          ? "flex gap-4 flex-row-reverse mb-1 mt-4"
          : "flex gap-4 mt-4 mb-1"
      }`}
    >
      <div className="flex flex-col mb-4">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-8 h-8 rounded-full object-cover border-primary border"
        />
      </div>
      <div
        className={`${
          message.senderId === currentUser.uid
            ? "max-w-[80%] flex flex-col gap-2 items-end"
            : "max-w-[80%] flex flex-col gap-2"
        }`}
      >
        <p
          className={`${
            message.senderId === currentUser.uid
              ? "bg-msg text-msg border-msg border text-left py-2 px-4 rounded-2xl rounded-tr-none max-w-[100%] overflow-x-hidden"
              : "bg-primary text-left text-primary border-primary border py-2 px-4 rounded-2xl rounded-tl-none max-w-[100%] overflow-x-hidden"
          }`}
        >
          {message.text}
        </p>
        <span className="opacity-50">
          {moment(message.date.toDate()).format("LT")}
        </span>
        {message.img && <img src={message.img} alt="" className="w-[50%]" />}
      </div>
    </m.div>
  );
};

export default Message;
