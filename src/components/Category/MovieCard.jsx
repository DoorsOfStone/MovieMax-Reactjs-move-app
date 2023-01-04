import React from "react";

const MovieCard = () => {
  return (
    <div class="w-[250px] h-[350px] bg-slate-700/40 mx-1 flex flex-col hover:opacity-40 ">
      <div class="w-full h-3/4 flex justify-center items-center">
        <img
          class="w-full h-full  "
          src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
        />
      </div>
      <div class="w-full h-1/5 flex flex-col items-center ">
        <h1 class="text-xl text-slate-400 font-bold ">Black Panther</h1>
        <div>
          <button>Trailer</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
