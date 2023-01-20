import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../axios";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";
import axios from "../../axios";
import * as MdIcons from "react-icons/md";
import { useDispatch } from "react-redux";
import { saveMovie } from "../../store/FavsSlice";

const Row = ({ title, fetchUrl }) => {
  const dispatch = useDispatch();
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
        multi: false,
      }).then((response) => setMovieId(response));
    }
  };

  return (
    <div className="z-5 w-full  m-1  flex flex-col  bg-black    hover:touch-pan-right">
      <div className="z-5 p-2 w-full h-[40px] m-2 flex justify-start items-center">
        <h1 className=" text-white/60 text-3xl font-extrabold my-5">{title}</h1>
      </div>

      <div className="-z-5 w-full h-full flex flex-row movieCard ">
        {movies.map((movie, index) => (
          <div
            onClick={() => playVideo(movie)}
            key={index}
            className="container m-1   hover:shadow-lg hover:shadow-blue-500 active:opacity-10"
          >
            <img
              id={movie.id}
              className="min-w-[160px] min-h-[200px] text-slate-400 text-xl font-bold object-contain flex"
              src={`${imgUrl}${movie.poster_path}`}
              alt={movie?.original_title || movie?.name || movie?.title}
            />
            <button
              onClick={() =>
                dispatch(
                  saveMovie({
                    id: movie,
                    key: movie,
                    name: movie.title,
                    image: `${imgUrl}${movie.poster_path}`,
                  })
                )
              }
              className="btn w-[100px] h-[100px] text-[40px] flex justify-center items-center  rounded-full text-white border  border-white hover:text-red-600 "
            >
              <MdIcons.MdFavorite />
            </button>
          </div>
        ))}
      </div>
      {movieId && (
        <div className="player_wrapper ">
          <ReactPlayer
            className="react_player"
            url={`${youTubeUrl}${movieId}`}
            width="100%"
            height="100%"
            control="true"
            playing="true"
          />
        </div>
      )}
    </div>
  );
};

export default Row;
