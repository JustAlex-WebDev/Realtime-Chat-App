import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Home from "./routes/Home";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Account from "./routes/Account";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
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
    </>
  );
}

export default App;
