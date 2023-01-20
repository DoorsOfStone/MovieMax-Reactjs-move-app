import React from "react";
import Navbar from "../components/Navbar/Navbar";

function MovieInfo() {
  return (
    <div className="w-[screen] h-[screen] flex flex-col ">
      <Navbar />
      <div className="w-full h-screen flex flex-row">
        <div className="w-1/4 h-[600px] text-white border  justify-center items-center">
          Img Container
        </div>
        <div className="w-3/4 text-white border flex flex-row flex-wrap">
          <h1> Movie Title </h1>

          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
