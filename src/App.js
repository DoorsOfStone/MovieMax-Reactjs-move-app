import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Category/Row";
import requests from "./request";

function App() {
  return (
    <div className="home bg-black">
      <Navbar />
      <Banner />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />
      <Row title="Comdey" fetchUrl={requests.fetchComdey} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentary} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
    </div>
  );
}

export default App;
