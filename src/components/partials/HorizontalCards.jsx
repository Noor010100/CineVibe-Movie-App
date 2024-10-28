import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full flex overflow-y-hidden overflow-x-auto mb-5 p-3 md:p-5 space-x-3">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[70%] sm:min-w-[40%] md:min-w-[25%] lg:min-w-[18%] h-[40vh] md:h-[50vh] bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-[60%] object-cover"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt={d.name || d.title || d.original_name || d.original_title}
            />
            <div className="text-white p-3 h-[40%] flex flex-col justify-between">
              <h1 className="text-lg md:text-xl font-semibold truncate">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-sm md:text-base text-zinc-400 mt-1">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-white text-2xl md:text-3xl font-black text-center w-full">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
