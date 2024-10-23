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
        backgroundPosition: "top 10%",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-4xl text-white font-black ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-3 text-zinc-400">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-[#6556CD]">more</Link>
      </p>
      <p className="text-white flex gap-2 ">
        <i className="text-[#6556CD] ri-calendar-check-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="text-[#6556CD] ri-movie-2-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="mt-3 bg-[#6556CD] text-white rounded-lg p-4">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
