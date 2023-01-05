import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex flex-row w-full h-[50px] bg-black z-10">
      <div className="flex flex-row justify-center items-center w-1/4 h-full p-2 text-slate-400 text-md">
        <div className="w-1/2 h-full flex flex-row justify-center items-center">
          <h1 className="Logo text-2xl font-extrabold">MovieMax</h1>
        </div>
        <div className="w-1/2 h-full flex flex-row justify-center items-center text-md">
          <h4 className="mx-5 hover:text-[20px]">Home</h4>
          <h4 className="mx-5 hover:text-[20px]">Trending </h4>
          <h4 className="mx-5 hover:text-[20px]">New</h4>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-1/2 h-full">
        <input
          className="w-2/3 h-2/3 p-3 rounded-lg text-slate-400 text-lg bg-slate-700/50 outline-none   "
          placeholder="Search"
        />
      </div>
      <div className="w-1/4 h-full flex flex-row justify-end items-center ">
        <h4 className="favs text-slate-400 text-[30px] mr-5:">♡</h4>
        <button className="w-[60px] h-[30px] bg-[#15d6f8] rounded-sm hover:bg-[#e4b125] text-white text-md m-2">
          Sign In
        </button>
        <button className="w-[60px] h-[30px] bg-[#ad53a6] rounded-sm hover:bg-[#e4b125] text-white text-md m-2">
          Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
