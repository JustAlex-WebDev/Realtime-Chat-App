import React, { useContext, useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { AiOutlineFileImage } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { async } from "@firebase/util";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  };

  return (
    <div className="h-[75px] bg-[#f2f2f2] p-2 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type something..."
        className="w-[50%] p-2 border rounded-2xl bg-[#fff] text-[#161616]"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        value={text}
      />
      <div className="flex items-center gap-4">
        <IoMdAttach size={18} className="cursor-pointer" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <AiOutlineFileImage size={18} className="cursor-pointer" />
        </label>
        <button
          onClick={handleSend}
          className="p-2 px-4 text-sm bg-[#161616] text-[#fff] hover:opacity-50 rounded-2xl shadow-xl font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
