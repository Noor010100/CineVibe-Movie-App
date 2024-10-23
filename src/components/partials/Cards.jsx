import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"


const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full p-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[25vh] mr-[5%] mb-[2%] " key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={ c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }` : noimage}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>


          {c.vote_average && (<div className="absolute right-[-15%] bottom-[90%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">{(c.vote_average * 10).toFixed()} <sup>%</sup>
          </div>)}
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
