import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="bg-primary h-[100vh] flex items-center">
      <div className="mx-auto px-12 py-12 bg-secondary rounded-2xl">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold text-primary mx-auto">
            Coffee Talks
          </span>
          <span className="text-lg font-bold text-primary mx-auto">
            Sign Up
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="username" className="text-primary">
              Username
            </label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="username"
                className="w-full p-2 border rounded-2xl bg-secondary text-primary outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="email" className="text-primary">
              Email
            </label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="email"
                className="w-full p-2 border rounded-2xl bg-secondary text-primary outline-none"
                type="email"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="text-primary">
              Password
            </label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                id="password"
                className="w-full p-2 border rounded-2xl bg-secondary text-primary outline-none"
                type="password"
              />
            </div>
          </div>
          <div className="">
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-secondary text-primary hidden"
                type="file"
                id="file"
              />
            </div>
          </div>
          <label
            htmlFor="file"
            className="flex items-center gap-2 text-primary text-base cursor-pointer mb-8 justify-center"
          >
            <BiImageAdd size={25} />
            <span>Add an avatar</span>
          </label>
          <button className="w-full my-2 p-3 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-primary">
          Already have an account?<span> </span>
          <Link className="hover:opacity-50 font-bold" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
