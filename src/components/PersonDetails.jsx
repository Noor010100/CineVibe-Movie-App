import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");
  
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen h-[190vh] flex flex-col">
      {/* part 1 */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex ">
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[38vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/* social media links */}
          <div className="flex gap-x-5  text-2xl text-white">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="hover:text-[#6556CD] ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="hover:text-[#6556CD] ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="hover:text-[#6556CD] ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="hover:text-[#6556CD] ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* Personal Info */}

          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Personal info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known for</h1>
          <h1 className="text-zinc-400 ">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400 ">
            {info.detail.gender === 2 ? "male" : "female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400 ">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className="text-zinc-400 ">
            {info.detail.deathday ? info.detail.deathday : "Still Entertaining"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Place of Birth
          </h1>
          <h1 className="text-zinc-400 ">{info.detail.place_of_birth}</h1>
        </div>
        {/* part 3 write details and info */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">
            {info.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Overview</h1>
          <p className="text-zinc-400 mt-2 text-xs">{info.detail.biography}</p>

          <h1 className="text-lg text-zinc-400 font-semibold mt-4">
            Known For
          </h1>

          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="text-xl text-zinc-400 font-semibold mt-4">Acting</h1>

            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>
          <div className="list-disc text-zinc-400 w-full h-[50vh] overflow-y-auto overflow-x-hidden shadow-xl shadow-[rgba(255, 255, 255, .2)] mt-5 border border-zinc-800 p-5 ">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}{" "}
                  </span>
                  <span className="block ml-5 mt-2">
                    {c.character && `Character Name: ${c.character}`}{" "}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>

      {/*   */}
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
