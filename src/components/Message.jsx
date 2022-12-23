import React, { useState } from "react";

const Message = () => {
  const [owner, setOwner] = useState(true);
  return (
    <div className={`${owner ? "flex gap-4 flex-row-reverse" : "flex gap-4"}`}>
      <div className="flex flex-col mb-4">
        <img
          src="https://images.pexels.com/photos/14769547/pexels-photo-14769547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="opacity-50">just now</span>
      </div>
      <div
        className={`${
          owner
            ? "max-w-[80%] flex flex-col gap-2 items-end"
            : "max-w-[80%] flex flex-col gap-2"
        }`}
      >
        <p
          className={`${
            owner
              ? "bg-[#161616] text-[#fff] py-2 px-4 rounded-2xl rounded-tr-none max-w-max"
              : "bg-[#f2f2f2] py-2 px-4 rounded-2xl rounded-tl-none max-w-max"
          }`}
        >
          Hello
        </p>
        <img
          src="https://images.pexels.com/photos/14769547/pexels-photo-14769547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-[50%]"
        />
      </div>
    </div>
  );
};

export default Message;
