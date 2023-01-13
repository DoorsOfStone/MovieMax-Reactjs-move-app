import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ name, image }) => {
  return (
    <div className="m-1  hover:opacity-40 hover:shadow-lg hover:shadow-blue-500">
      <img
        className="min-w-[160px] min-h-[200px]  text-slate-400 text-xl font-bold object-contain flex"
        src={image}
        alt={name}
      />
    </div>
  );
};

export default MovieCard;
