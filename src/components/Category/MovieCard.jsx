import React from "react";

const MovieCard = ({ name, image }) => {
  return (
    <div className="m-1  hover:scale-x-100  transition-transform-o.25ms  hover:opacity-40">
      <img
        className="min-w-[150px] min-h-[200px]  text-slate-400 text-xl font-bold object-contain flex"
        src={image}
        alt={name}
      />
    </div>
  );
};

export default MovieCard;
