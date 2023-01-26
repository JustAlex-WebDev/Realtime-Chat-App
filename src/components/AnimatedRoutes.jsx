import React, { useState, useContext } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Signup from "../routes/Signup";
import Signin from "../routes/Signin";
import Home from "../routes/Home";
import Account from "../routes/Account";
import { AuthContext } from "../context/AuthContext";
import { AnimatePresence } from "framer-motion";
import Chat from "../routes/Chat";

const AnimatedRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const [chats, setChats] = useState([]);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathName}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home chats={chats} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
