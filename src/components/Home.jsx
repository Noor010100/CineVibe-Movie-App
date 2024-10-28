import { useEffect, useState } from "react";
import Sidenav from "../components/partials/Sidenav";
import Topnav from "../components/partials/Topnav";
import axios from "../utils/axios";
import Header from "../components/partials/Header";
import HorizontalCards from "../components/partials/HorizontalCards";
import Dropdown from "../components/partials/Dropdown";
import Loading from "../components/Loading";
const Home = () => {
  document.title = "CineVibe | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);

      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata || []);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      settrending(data.results || []);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />

        <Header data={wallpaper} />

        <div className="p-5 flex justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400 mr-5">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
