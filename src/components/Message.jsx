import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import moment from "moment";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`${
        message.senderId === currentUser.uid
          ? "flex gap-4 flex-row-reverse mb-1 mt-4"
          : "flex gap-4 mt-4"
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
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="opacity-50">
          {moment(message.date.toDate()).format("LT")}
        </span>
      </div>
      <div
        className={`${
          message.senderId === currentUser.uid
            ? "max-w-[80%] flex flex-col gap-2 items-end"
            : "max-w-[80%] flex flex-col"
        }`}
      >
        <p
          className={`${
            message.senderId === currentUser.uid
              ? "bg-[#161616] text-left text-[#fff] py-2 px-4 rounded-2xl rounded-tr-none max-w-[100%] overflow-x-hidden"
              : "bg-[#f2f2f2] text-left py-2 px-4 rounded-2xl rounded-tl-none max-w-[100%] overflow-x-hidden"
          }`}
        >
          {message.text}
        </p>
        {message.img && <img src={message.img} alt="" className="w-[50%]" />}
      </div>
    </div>
  );
};

export default Message;
