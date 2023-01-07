import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Category/MovieCard";
import * as FiIcons from "react-icons/fi";

const Navbar = ({ fetchMovie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovie] = useState("");
  const [query, setQuery] = useState("");
  const [searchResults, setSearched] = useState([]);
  const Api_Key = "0429764d692187b263694f808db64838";
  const urlBase = `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&language=en-US&page=1&include_adult=false&query=${query}`;
  useEffect(() => {
    async function movieSearch() {
      const response = await axios.get(urlBase);
      setSearched(response.data.results);
      console.log(response.data.results);
    }
    movieSearch();
  }, [query]);
  const updateMovie = (e) => {
    setMovie(e.target.value);
  };
  const getMovie = (e) => {
    e.preventDefault();
    setQuery(movies);
    setMovie(" ");
  };
  return (
    <>
      <div className="w-full h-full flex flex-col z-10">
        <nav className="fixed flex flex-row w-full h-[50px] bg-black z-10 ">
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
          <form
            onSubmit={getMovie}
            className="flex flex-row justify-center items-center w-1/2 h-full"
          >
            <input
              className="w-2/3 h-2/3 p-3 rounded-lg text-slate-400 text-lg bg-slate-700/50 outline-none   "
              placeholder="Search"
              value={movies}
              onChange={updateMovie}
            />
          </form>
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
        {/* so if movies is true "if there is a value for movies" then we return a container where we map through our results of our api call, 
         if movies is not true (meaning we are searching anything at the moment ) ":" means "else" return a empty div */}
        {movies ? (
          <div className="text-whitew-full h-[1000px] p-5 flex flex-row flex-wrap mt-[100px] mb-[400px] bg-slate-600/20">
            {searchResults.map((movie, index) => (
              <div
                className="w-[200px] h-[300px] m-3 hover:opacity-40  shadow-2xl hover:shadow-blue-500"
                key={index}
              >
                <img
                  className="contain w-full min-h-[200px]"
                  src={`${imgUrl}${movie.poster_path}`}
                  alt={movie.orginal_title}
                />
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
