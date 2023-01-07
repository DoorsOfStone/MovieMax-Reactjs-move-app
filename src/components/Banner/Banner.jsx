import React, { useState, useEffect } from "react";
import requests from "../../request";
import instance from "../../axios";

// youtube link use key from api
//https://www.youtube.com/watch?v=SUXWAEX2jlg
const Banner = ({ fetchUrl }) => {
  const [movieId, setMovieId] = useState([]);
  const videoCallUrl = "http://api.themoviedb.org/3/movie/550/videos?api_key=";
  /*   useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(fetchUrl);
        const data = response.data.results.slice(
          Math.floor(Math.random() / response.length)
        );
        setMovieId(data);
      } catch {
        console.log(Error);
      }
    }
    fetchData();
    //async function fetchVideo(){
    //const response

    console.log(movieId);
    // }
  }, [fetchUrl]); */
  return (
    <div className="w-[screen] h-[600px] flex flex-row justify-center bg-black ">
      <div className=" w-full h-full flex justify-center items-center bg-transparent">
        <img
          className="-z-5 w-2/3 h-full shadow-[5px_5px_60px_blue] rounded-t-lg"
          src="https://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg"
        />
        <div className="z-2  h-[300px] flex flex-col justify-center items-center -ml-[300px] mt-[200px] p-5 ">
          <button className="w-[150px] h-[40px]  m-2 rounded-sm bg-slate-400 text-xl font-medium text-white hover:bg-[#e4b125]  hover:shadow-[#ff6cdf] shadow-lg ">
            Trailer
          </button>
          <button className="w-[150px] h-[40px] m-2 rounded-sm bg-slate-700 text-xl font-medium text-white hover:bg-[#e4b125] hover:shadow-[#ff6cdf] shadow-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
