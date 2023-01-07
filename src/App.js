import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Category/Row";
import requests from "./request";
import axios from "axios";

function App() {
  return (
    <div className="home bg-black">
      <Navbar fetchMovie={requests.fetchMovie} />
      <Banner />
      <Row title="Trending" fetchUrl={requests.getTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.getNetflix} />
      <Row title="Action" fetchUrl={requests.getAction} />
      <Row title="Adventure" fetchUrl={requests.getAdventure} />
      <Row title="Comdey" fetchUrl={requests.getComdey} />
      <Row title="Crime" fetchUrl={requests.getCrime} />
      <Row title="Documentary" fetchUrl={requests.getDocumentary} />
      <Row title="Animation" fetchUrl={requests.getAnimation} />
      <Row title="Sci-fi" fetchUrl={requests.getScienceFaction} />
      <Row title="Westerns" fetchUrl={requests.getWestern} />
      <Row title="Family" fetchUrl={requests.getFamily} />
    </div>
  );
}

export default App;
