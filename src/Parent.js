import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import NewPage from "./components/NewPage";

const Parent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </div>
  );
};

export default Parent;
