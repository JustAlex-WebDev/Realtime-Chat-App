import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

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

  return (
    <div className="border-b-2 border-[#f2f2f2]">
      <div className="flex justify-center items-center w-full border-b-2 border-[#f2f2f2]">
        <div className="p-2 py-4 font-semibold text-lg w-[100%]">
          Search Friends
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative p-2 focus-within:w-full"
        >
          <input
            type="text"
            className="relative bg-[#fff] text-[#161616] w-8 h-8 rounded-full border border-black focus:w-full focus:border-black outline-none cursor-pointer focus:cursor-text pl-8 py-4"
            placeholder="Search a user"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <AiOutlineSearch
            size={20}
            className="absolute inset-y-0 my-auto ml-[7px] pointer-events-none"
          />
        </form>
      </div>

      {user ? (
        <div className="p-2 flex items-center gap-2 cursor-pointer text-[#161616] hover:bg-[#f2f2f2]">
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
