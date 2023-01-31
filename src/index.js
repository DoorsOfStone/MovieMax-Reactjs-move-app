import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import SignUp from "./pages/SignUp";
import MovieInfo from "./pages/MovieInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/main" />
          <Route element={<Login />} path="/" exact />
          <Route element={<SignUp />} path="/Register" />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
