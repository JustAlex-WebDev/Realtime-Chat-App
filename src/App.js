import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Home from "./routes/Home";
import Authenthication from "./routes/Authenthication";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/authentication" element={<Authenthication />} />
      </Routes>
    </>
  );
}

export default App;
