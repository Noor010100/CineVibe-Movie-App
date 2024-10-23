import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import Cards from "./partials/Cards";

const Tvshows = () => {
    document.title = "CineVibe | Tv Shows" ;
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [duration, setduration] = useState("day");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    
  
    const GetTv = async () => {
      try {
        const { data } = await axios.get(
          `/tv/${category}?page=${page}`
        );
  
        
        
        // settv(data.results || []);
  
        if (data.results.length > 0) {
          settv((prevState) => [...prevState, ...data.results]);
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
      if (tv.length === 0) {
        GetTv();
      } else {
        setpage(1);
        settv([]);
        GetTv();
      }
    };
  
    useEffect(() => {
      refershHandler();
    }, [category]);


  return tv.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Tv_Shows<span className="mr-10 ml-2 text-sm text-zinc-600">({category})</span>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title="category"
            options={["on_the_air" , "popular" , "top_rated" , "airing_today" ]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvshows