import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "@context/auth";
import { ActivityContextProvider } from "@context/activity";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./components/Header";
import QuestPage from "./pages/QuestPage";
import ProfilePage from "./pages/ProfilePage";
import ChallengePage from "./pages/ChallengePage";

function App() {
  return (
    <AuthContextProvider>
      <ActivityContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/quest/:id" element={<QuestPage />} />
          <Route path="/challenge/:id" element={<ChallengePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </ActivityContextProvider>
    </AuthContextProvider>
  );
}

export default App;
