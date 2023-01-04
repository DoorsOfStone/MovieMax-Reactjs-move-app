import React from "react";
import MovieCard from "./MovieCard";

const Row = ({ title }) => {
  return (
    <div class="w-full h-[500px] mt-2 p-1 flex flex-col bg-black">
      <h1 class="text-4xl m-5 text-slate-300/50 font-semibold border-b-4 border-slate-600/30">
        {title}
      </h1>
      <div class="w-full h-full flex flex-row justify-center items-center">
        <div class="flex justify-center items-center">
          <button class="w-[50px] h-[100px] text-slate-400 text-xl text-center rounded-l-full bg-slate-500/30  hover:bg-slate-900/30">
            {"<"}
          </button>
        </div>

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <div class="flex justify-center items-center">
          <button class="w-[50px] h-[100px] text-slate-400  text-xl text-center rounded-r-full bg-slate-500/30 hover:bg-slate-900/30 ">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Row;
