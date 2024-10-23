import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]); // Initialize as an empty array

  const apiKey = '0871e71e3957a41904e27a58600ed0a3'; // Replace with your actual TMDb API key

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
      setSearches([]); // Clear results if query is empty
    }
  }, [query]);

  return (
    <div className="w-[80%] h-[10vh] relative flex items-center mx-auto">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] h-[40px] bg-transparent border-none outline-none mx-10 text-xl p-5 text-zinc-200"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="  text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="z-[100] absolute w-[60%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
        {searches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i} 
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg" 
            src={s.backdrop_path || 
            s.profile_path ? `https://image.tmdb.org/t/p/original/${
              s.poster_path || s.profile_path}` : noimage
            } alt="" />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Topnav;