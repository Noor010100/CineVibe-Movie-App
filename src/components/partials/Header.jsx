import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
                      url(https://image.tmdb.org/t/p/original/${
                        data.backdrop_path || data.profile_path
                      })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] md:h-[50vh] flex flex-col justify-end items-start p-4 md:p-[5%] relative"
    >
      <h1 className="text-2xl md:text-4xl text-white font-black w-full md:w-[70%]">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="text-sm md:text-base text-zinc-400 mt-2 md:mt-3 w-full md:w-[70%]">
        {data.overview.slice(0, 150)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-[#6556CD]">
          more
        </Link>
      </p>
      <p className="text-white flex items-center gap-2 text-sm md:text-base mt-2 md:mt-3">
        <i className="text-[#6556CD] ri-calendar-check-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="text-[#6556CD] ri-movie-2-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="mt-3 bg-[#6556CD] text-white rounded-lg p-2 md:p-4 text-sm md:text-base"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
