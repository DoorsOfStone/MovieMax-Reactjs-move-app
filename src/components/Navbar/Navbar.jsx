import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { useSelector } from "react-redux";
import SavedMovie from "./SavedMovie";

const Navbar = ({ fetchMovie }) => {
  var imgUrl = "https://image.tmdb.org/t/p/original/";
  const saved = useSelector((state) => state.saved);
  const [favMenu, setFavMenu] = useState(false);
  const [movies, setMovie] = useState("");
  const [query, setQuery] = useState("");
  const [searchResults, setSearched] = useState([]);
  const Api_Key = "0429764d692187b263694f808db64838";
  const urlBase = `https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&language=en-US&page=1&include_adult=false&query=${query}`;
  useEffect(() => {
    async function movieSearch() {
      const response = await axios.get(urlBase);
      setSearched(response.data.results);
      return response;
    }
    movieSearch();
  }, [urlBase]);
  const updateMovie = (e) => {
    setMovie(e.target.value);
  };
  const getMovie = (e) => {
    e.preventDefault();
    setQuery(movies);
  };
  const clearInput = (e) => {
    setMovie("");
  };
  const showFavsMenu = () => {
    setFavMenu(!favMenu);
  };
  return (
    <div>
      <div className="w-full h-full flex flex-col">
        <nav className="fixed flex flex-row w-full bg-black h-[50px] z-20">
          <div className="flex flex-row justify-center items-center w-1/4 h-full p-2 text-slate-400 text-md">
            <div className="w-1/2 h-full flex  justify-center items-center">
              <Link to={"/main"}>
                <h1 className="Logo w-full h-full text-[50px] flex flex-row font-extrabold text-center ">
                  //// MovieMax
                </h1>
              </Link>
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
            <>
              {movies ? (
                <>
                  <MdIcons.MdClear
                    onClick={clearInput}
                    className="text-slate-400 text-xl hover:text-slate-500/40"
                  />
                </>
              ) : (
                <div></div>
              )}
            </>
          </form>
          <div className="w-1/4 h-full flex flex-row justify-end items-center ">
            <MdIcons.MdFavorite
              onClick={showFavsMenu}
              className=" text-red-500 text-[30px] mr-5 hover:text-red-500/40"
            />
            <div className={favMenu ? "favs__Menu active " : "favs__Menu"}>
              <div className="w-full h-[100px] p-10   flex justify-end items-baseline ">
                <MdIcons.MdClear
                  onClick={showFavsMenu}
                  className="text-white text-[40px] hover:text-white/60"
                />
              </div>
              <div className="w-full h-full flex flex-row p-5">
                {saved?.map((item, index) => (
                  <SavedMovie
                    key={item.index}
                    id={item.title}
                    name={item.title}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
            <Link to={"/"}>
              <button className="w-[80px] h-[30px] bg-slate-400/40 rounded-sm hover:bg-slate-700/40 text-white text-md m-2">
                Sign out
              </button>
            </Link>
          </div>
        </nav>
        {/* so if movies is true "if there is a value for movies" then we return a container where we map through our results of our api call, 
         if movies is not true (meaning we are searching anything at the moment ) ":" means "else" return a empty div */}
        {movies ? (
          <div className="search__Results  fixed  w-full h-screen  bg-black/90 cover text-white  p-10 flex mb-[600px] z-10">
            <div className=" w-full  flex xs:flex-col md:flex-row md:flex-wrap ">
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
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
