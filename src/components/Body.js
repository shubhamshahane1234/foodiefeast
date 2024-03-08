import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "./../utils/userContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterData, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const user = useContext(userContext);
  async function fetchData() {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5946784%26lng%3D73.7095365%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const cards =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(cards);
    setRestaurants(cards);
    setFilter(cards);
    console.log("useEffect");
  }

  useEffect(() => {
    fetchData();
  }, [restaurants]);

  const takeSearch = (value) => {
    setSearch(value);
  };

  const filter = () => {
    const filtered = restaurants.filter((item) => {
      return item.info.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilter(filtered);
  };
  console.log("body", filterData, restaurants);
  {
    console.log("return");
    return filterData == null ? (
      <Shimmer />
    ) : (
      <>
        <div>
          <Search filter={filter} takeSearch={takeSearch} data={search} />

          {/* <div className="flex flex-wrap m-auto space-y-3 w-full lg:w-[1300px] mt-20 lg:mt-0 justify-between lg:justify-start"> */}

          <div className="flex flex-wrap justify-center sm:justify-between p-4 ">
            {filterData?.map((card, index) => {
              return (
                <Link to={`/Restaurant/${card?.info?.id}`}>
                  <RestaurantCard key={card?.info?.id} cardinfo={card} />
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};
export default Body;
