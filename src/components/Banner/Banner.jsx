import React, { useState, useEffect } from "react";
import requests from "../../request";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { saveMovie } from "../../store/FavsSlice";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
// youtube link use key from api
//https://www.youtube.com/watch?v=SUXWAEX2jlg
const imgUrl = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState("");
  const Api_Key = "0429764d692187b263694f808db64838";
  const youTubeUrl = "https://www.youtube.com/watch?v=";
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.getAction);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      setMovieId(response.data.results.id);
      return response;
    }
    fetchData();
    console.log(movie);
    console.log(movieId);
  }, []);

  const playVideo = (movie) => {
    if (movieId) {
      setMovieId("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "", {
        id: true,
        multi: false,
      }).then((response) => setMovieId(response));
    }
  };
  return (
    <div
      className="w-full h-[700px] flex flex-col    overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backkgroundPostion: "center center",
      }}
    >
      {movieId && (
        <div className="player_wrapepr mt-[100px] flex ">
          <MdIcons.MdOutlineArrowBack
            onClick={() => playVideo(movie)}
            className="z-40 text-white text-[40px] ml-5 hover:text-slate-600/60 cursor-pointer "
          />
          <ReactPlayer
            className="react_player "
            width="100%"
            height="80%"
            playing="true"
            control="true"
            url={`${youTubeUrl}${movieId}`}
          />
        </div>
      )}
      <div className="  w-1/2 h-2/3 mt-[100px] mb=[300px] p-10 flex flex-row flex-wrap items-center justify-center">
        <h1 className="text-white text-[60px] mb-5 font-semibold  ">
          {movie?.original_title || movie?.name || movie?.title}
        </h1>
        <p className="text-white text-3xl font-bold">
          "
          <span className="text-white text-lg font-light">
            {movie.overview}
          </span>
          "
        </p>
        <button
          onClick={() => playVideo(movie)}
          className="w-[150px] h-[40px]  my-5 mx-2 rounded-sm bg-black/80 text-xl font-medium text-white hover:bg-[#cc50a9a9]  "
        >
          Play
        </button>
        <button
          onClick={() =>
            dispatch(
              saveMovie({
                id: movie.name,
                title: movie.name,
                image: `${imgUrl}${movie.poster_path}`,
              })
            )
          }
          className="w-[150px] h-[40px] my-5 mx-2 rounded-sm bg-black/60 text-xl font-medium text-white hover:bg-[#cc50a9a9]"
        >
          My List
        </button>
      </div>
      <div className="fade w-screen h-[100px] mt-[100px]  "></div>
    </div>
  );
};

export default Banner;
