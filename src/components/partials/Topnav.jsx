import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const apiKey = '0871e71e3957a41904e27a58600ed0a3';

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}&api_key=${apiKey}`
      );
      setSearches(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (query) {
      GetSearches();
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <div className="w-full sm:w-[80%] lg:w-[75%] h-[10vh] relative flex items-center mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-[70%] sm:w-[50%] lg:w-[40%]">
        <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 text-xl sm:text-2xl lg:text-3xl ri-search-line"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-full h-[40px] bg-transparent border border-zinc-500 rounded pl-10 pr-3 outline-none text-lg sm:text-xl lg:text-2xl p-2 text-zinc-200 placeholder-zinc-400"
          type="text"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 text-xl sm:text-2xl lg:text-3xl ri-close-fill cursor-pointer"
          ></i>
        )}
      </div>

      {/* Search results */}
      <div className="z-[100] absolute w-full sm:w-[80%] lg:w-[60%] max-h-[50vh] bg-zinc-200 top-[110%] left-[5%] overflow-auto shadow-lg rounded-lg mt-3">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-3 sm:p-5 lg:p-6 flex justify-start items-center border-b border-zinc-100"
          >
            <img
              className="w-[6vh] h-[6vh] sm:w-[8vh] sm:h-[8vh] lg:w-[10vh] lg:h-[10vh] object-cover rounded mr-3 sm:mr-4 lg:mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.profile_path}`
                  : noimage
              }
              alt=""
            />
            <span className="text-xs sm:text-sm lg:text-base">
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
