import React, { useContext, useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = ({ user, setUser }) => {
  const [username, setUsername] = useState("");

  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
      console.log(err.message);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // create chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err.message);
      setErr(true);
    }

    setUser(null);
    setUsername("");
  };

  return (
    <div>
      <div className="absolute top-2 right-4 ">
        <form onSubmit={(e) => e.preventDefault()} className="relative p-2">
          <input
            type="text"
            className="w-0 h-8 rounded-full border bg-primary border-primary focus:w-52 outline-none cursor-pointer focus:cursor-text pl-8 py-4 transition-all"
            placeholder="Add a user"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            title="Add a user"
          />
          <RiUserSearchLine
            size={20}
            className="absolute inset-y-0 my-auto ml-[7px] pointer-events-none"
          />
        </form>
      </div>
      {user ? (
        <div
          onClick={handleSelect}
          className="border-primary border-b p-2 pl-6 flex items-center gap-2 cursor-pointer hover:bg-secondary"
        >
          <img
            src={user.photoURL}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div>
            <span className="font-semibold">{user.displayName}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
