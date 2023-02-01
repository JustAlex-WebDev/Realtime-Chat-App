import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  // console.log(Object.entries(chats));

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <Link to="/chat">
            <div
              key={chat[0]}
              className="p-2 flex items-center gap-3 cursor-pointer hover:bg-[#161616] pl-6"
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <img
                src={chat[1].userInfo.photoURL}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="w-[50%]">
                <span className="font-semibold">
                  {chat[1].userInfo.displayName}
                </span>
                <p className="text-sm opacity-80">
                  {chat[1].lastMessage?.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Chats;
