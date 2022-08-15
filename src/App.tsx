import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/kakao" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
