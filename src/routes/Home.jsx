import React, { useState } from "react";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion as m } from "framer-motion";

const Home = () => {
  const [user, setUser] = useState(null);

  return (
    <m.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="main-div"
    >
      <Navbar user={user} setUser={setUser} />
      <div>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <Sidebar user={user} />
        </m.div>
        {/* <Chat /> */}
      </div>
    </m.div>
  );
};

export default Home;
