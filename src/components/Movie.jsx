import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import Cards from "./partials/Cards";

const Movie = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [duration, setduration] = useState("day");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "CineVibe | Movies " + category.toUpperCase();
  
    const GetMovie = async () => {
      try {
        const { data } = await axios.get(
          `/movie/${category}?page=${page}`
        );
  
        
        
        // setmovie(data.results || []);
  
        if (data.results.length > 0) {
          setmovie((prevState) => [...prevState, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      }
    };
  
    const refershHandler = () => {
      if (movie.length === 0) {
        GetMovie();
      } else {
        setpage(1);
        setmovie([]);
        GetMovie();
      }
    };
  
    useEffect(() => {
      refershHandler();
    }, [category]);


  return movie.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movie<span className="mr-10 ml-2 text-sm text-zinc-600">({category})</span>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title="category"
            options={["popular" , "top_rated" , "upcoming", "now_playing" ]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={movie} title="movie"/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie