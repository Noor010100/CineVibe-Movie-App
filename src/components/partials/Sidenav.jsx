import axios from "../../utils/axios";
import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-500 p-10 ">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">CineVibe</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-xl text-white font-semibold mt-10 mb-5">
          New Feed
        </h1>
        <Link
          to={"/trending"}
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300"
        >
          <i className="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link to={"/popular"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
          <i className="ri-bard-line mr-2"></i>Popular
        </Link>
        <Link to={"/movie"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
          <i className="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link to={"/tv"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
          <i className="ri-tv-2-fill mr-2"></i>Tv Shows
        </Link>
        <Link to={"/person"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
          <i className="ri-team-fill mr-2"></i>People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-xl text-white font-semibold mt-10 mb-5">
          Website Information
        </h1>
        <Link to={"/contact"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
          <i className="ri-phone-fill mr-2"></i>Contact Us
        </Link>
        <Link to={"/about"} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
          <i className="ri-information-line mr-2"></i>About Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
