import React from "react";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="main-div">
      <div className="">
        <Navbar />
        <Sidebar />
        {/* <Chat /> */}
      </div>
    </div>
  );
};

export default Home;
