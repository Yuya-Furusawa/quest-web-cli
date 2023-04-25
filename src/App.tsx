import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Quest from "./pages/Quest";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quest/:id" element={<Quest />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
