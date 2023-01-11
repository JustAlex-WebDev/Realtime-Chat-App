import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-[#fff] h-[100vh] flex items-center justify-center main-div xlg:rounded-2xl border-black border-2 shadow-2xl">
      <div className="w-full h-full md:flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
