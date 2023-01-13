import React, { useState, useEffect } from "react";
import requests from "../../request";
import axios from "../../axios";

// youtube link use key from api
//https://www.youtube.com/watch?v=SUXWAEX2jlg
const imgUrl = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  const videoCallUrl = "http://api.themoviedb.org/3/movie/550/videos?api_key=";
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.getNetflix);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
    console.log(movie);
  }, []);
  return (
    <div
      className="w-full h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backkgroundPostion: "center center",
      }}
    >
      <div className="  w-[600px] h-[400px] flex flex-col items-center justify-center">
        <h1 className="text-white text-[40px] mb-5 font-semibold  ">
          {movie?.original_title || movie?.name || movie?.title}
        </h1>
        <button className="w-[150px] h-[40px]  m-2 rounded-sm bg-black/60 text-xl font-medium text-white hover:bg-[#e4b125]  hover:shadow-[#ff6cdf] shadow-lg ">
          Trailer
        </button>
        <button className="w-[150px] h-[40px] m-2 rounded-sm bg-black/60 text-xl font-medium text-white hover:bg-[#e4b125] hover:shadow-[#ff6cdf] shadow-lg">
          Save
        </button>
        <p className="text-white text-lg font-extralight">"{movie.overview}"</p>
      </div>
    </div>
  );
};

export default Banner;
