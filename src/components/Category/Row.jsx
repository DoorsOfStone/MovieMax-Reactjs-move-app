import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import instance from "../../axios";

const Row = ({ title, fetchUrl }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="z-10 w-full h-[300px] m-1  flex flex-col  bg-black    hover:touch-pan-right">
      <div className="z-10 p-2 w-full h-[40px] m-2 flex justify-start items-center">
        <h1 className=" text-white text-3xl font-extrabold my-5">{title}</h1>
      </div>

      <div className="-z-5 w-full h-full flex flex-row  ">
        {movies.map((movie) => (
          <MovieCard
            name={movie.original_title}
            image={`${imgUrl}${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
