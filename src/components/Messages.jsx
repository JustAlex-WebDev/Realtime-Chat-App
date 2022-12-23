import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="p-2 messages overflow-y-scroll">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
