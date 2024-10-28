import axios from "../../utils/axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-[#6556CD] text-white p-2 rounded-full"
      >
        {isOpen ? (
          <i className="ri-close-fill text-2xl md:text-3xl"></i> // Show close icon when the menu is open
        ) : (
          <i className="ri-menu-fill text-2xl md:text-3xl"></i> // Show menu icon when the menu is closed
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full bg-zinc-900 border-r-2 border-zinc-500 p-5 lg:p-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out w-[75%] md:w-[50%] lg:w-[20%] z-40`}
      >
        <h1 className="text-xl md:text-2xl text-white font-bold mb-10 flex items-center">
          <i className="text-[#6556CD] ri-tv-fill mr-4 text-2xl md:text-3xl"></i>
          <span>CineVibe</span>
        </h1>
        
        <nav className="flex flex-col text-zinc-400 text-lg md:text-xl">
          <h1 className="text-lg md:text-xl text-white font-semibold mt-5 mb-5">
            New Feed
          </h1>
          <Link
            to={"/trending"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-fire-fill mr-2 text-xl md:text-2xl"></i>Trending
          </Link>
          <Link
            to={"/popular"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-bard-line mr-2 text-xl md:text-2xl"></i>Popular
          </Link>
          <Link
            to={"/movie"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-movie-2-fill mr-2 text-xl md:text-2xl"></i>Movies
          </Link>
          <Link
            to={"/tv"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-tv-2-fill mr-2 text-xl md:text-2xl"></i>Tv Shows
          </Link>
          <Link
            to={"/person"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-team-fill mr-2 text-xl md:text-2xl"></i>People
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400 my-5" />

        <nav className="flex flex-col text-zinc-400 text-lg md:text-xl">
          <h1 className="text-lg md:text-xl text-white font-semibold mt-5 mb-5">
            Website Information
          </h1>
          <Link
            to={"/contact"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-phone-fill mr-2 text-xl md:text-2xl"></i>Contact Us
          </Link>
          <Link
            to={"/about"}
            className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 md:p-3 duration-300 flex items-center"
          >
            <i className="ri-information-line mr-2 text-xl md:text-2xl"></i>About Us
          </Link>
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidenav;
