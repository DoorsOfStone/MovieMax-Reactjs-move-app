import React from "react";

const Banner = () => {
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
