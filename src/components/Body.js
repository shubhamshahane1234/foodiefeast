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
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5946784&lng=73.7095365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )}`
    );

    // fetch(
    //   "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5946784&lng=73.7095365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5946784&lng=73.7095365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const jsonData = await data.json();
    const cards =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(cards);
    setRestaurants(cards);
    setFilter(cards);
    console.log("useEffect");
  }

  useEffect(
    () => {
      fetchData();
    },
    []
    // [restaurants]
  );

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

          <section class="">
            <div class="px-4 py-8 mx-auto max-w-8xl">
              <div class="space-y-4">
                <h2 class=" text-2xl lg:text-3xl font-bold text-center">
                  RESTAURANTS
                </h2>
                {/* <p class="mx-auto font-light text-center text-gray-600 max-w-96">
            Here are few project i worked on recently
          </p> */}
              </div>
              <div class="relative w-full p-4 mt-16">
                {/* <div class="absolute left-0 hidden w-full h-px -translate-y-1/2 bg-gray-950/10 lg:top-1/2 md:top-1/3 md:block"></div>
          <div class="absolute hidden w-px h-full md:block bg-gray-950/10 left-1/2 lg:left-1/3"></div>
          <div class="absolute left-0 hidden w-full h-px lg:w-px lg:h-full bg-gray-950/10 lg:left-2/3 top-2/3 lg:top-0 md:block"></div> */}
                <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
                  {filterData?.map((card, index) => {
                    return (
                      <Link
                        className="m-auto"
                        to={`/Restaurant/${card?.info?.id}`}
                      >
                        <RestaurantCard key={card?.info?.id} cardinfo={card} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
};
export default Body;
