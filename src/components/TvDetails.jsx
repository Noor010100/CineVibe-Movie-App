import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), 
                    url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top 10%",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen min-h-[140vh] px-[10%]"
    >
      {/* part 1 */}
      <nav className="w-full h-[10vh]  text-zinc-100 flex items-center gap-10 text-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-[#6556CD] ri-external-link-line"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-[#6556CD] ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          className="bg-yellow-500 text-black rounded-lg p-1 font-bold"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      {/* part 2 */}

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-4xl font-black  ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-xl font-bold text-zinc-200">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-2 mb-5 flex items-center gap-x-3 ">
            <span className=" rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>

            <h1 className="font-semibold text-xl w-[60px] leading-6">
              User Score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>

          <h1 className="text-xl font-semibold italic ">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mt-1 mb-1 ">Overview</h1>
          <p className="mb-10">{info.detail.overview}</p>

          <Link
            className=" p-4 bg-[#6556CD] text-white rounded-lg text-center"
            to={`${pathname}/trailer/`}
          >
            {" "}
            <i className="ri-play-fill mr-2 text-xl "></i>Play Trailer
          </Link>
        </div>
      </div>

      {/* part 3 platforms available on */}

      <div className="w-[50%] flex flex-col gap-y-4 mt-6 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-6 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-6 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-6 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4 seasons */}

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

      <h1 className="text-2xl font-bold text-white mt-10">Seasons</h1>

      <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5">
        {info.detail.seasons.length > 0 ? info.detail.seasons.map((s,i)=>(
          <div className="w-[15vh] mr-[13%]">
          <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[14vw] h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
          alt=""
        />
        <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
          {s.name}
        </h1>
        </div>
        )) : <h1 className="text-white text-3xl font-black text-center">Nothing to show</h1> }
        
      </div>

      {/* part 5 similar tvs */}

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

      <h1 className="text-2xl font-bold text-white mt-10">
        Recommendations And Similar tvs
      </h1>

      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
