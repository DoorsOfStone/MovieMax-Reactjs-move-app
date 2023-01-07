import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/main" />
        <Route element={<Login />} path="/" exact />
        <Route element={<SignUp />} path="/Register" />
        <Route element={<Favorites />} path="/Favorites" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
