import React, { useEffect, useState } from "react";
import instance from "../../axios";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import axios from "../../axios";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
//import { useDispatch } from "react-redux";
//import { saveMovie } from "../../store/FavsSlice";

const Row = ({ title, fetchUrl }) => {
  //const dispatch = useDispatch();
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [view, setView] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  //const videoApi = `https://api.themoviedb.org/3/movie/${movieId}/videos?`;
  const youTubeUrl = "https://www.youtube.com/watch?v=";
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }

    fetchData();
  }, [fetchUrl]);

  const playVideo = (movie) => {
    if (movieId) {
      setMovieId("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "", {
        id: true,
        multi: true,
      }).then((response) => setMovieId(response));
    }
    if (movieId == null) {
      alert("Trailer Not Available");
    }
  };

  return (
    <div className="z-5 w-full  m-1  flex flex-col  bg-black    hover:touch-pan-right">
      <div className="z-5 p-2 w-full h-[40px] m-2 flex justify-start items-center">
        {movies && (
          <h1 className=" text-white/60 text-3xl font-extrabold my-5">
            {title}
          </h1>
        )}
      </div>

      <div className="-z-5 w-full h-full flex flex-row movieCard ">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="container m-1   hover:shadow-lg hover:shadow-blue-500 hover:opacity-40"
          >
            <img
              id={movie.id}
              className="min-w-[160px] min-h-[200px] text-slate-400 text-xl font-bold object-contain flex"
              src={`${imgUrl}${movie.poster_path}`}
              alt={movie?.original_title || movie?.name || movie?.title}
            />
            <button
              onClick={() => playVideo(movie)}
              className="btn  text-white  hover:text-slate-600/50 text-[30px] flex justify-center items-center"
            >
              <FaIcons.FaPlay />
            </button>
          </div>
        ))}
      </div>
      {movieId && (
        <div className=" player_wrapper w-screen   z-40 flex">
          <ReactPlayer
            className="react_player"
            url={`${youTubeUrl}${movieId}`}
            width="100%"
            height="100%"
            control="true"
            playing="true"
          />
          <MdIcons.MdOutlineArrowBack
            onClick={() => playVideo()}
            className="z-50 text-white text-[40px] ml-5 hover:text-slate-600/60 cursor-pointer "
          />
        </div>
      )}
    </div>
  );
};

export default Row;
