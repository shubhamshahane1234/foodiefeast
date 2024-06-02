import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  const restaurantMenufn = async () => {
    const fetchMenu = await // fetch(
    //   `https://api.allorigins.win/raw?url=${encodeURIComponent(
    //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5946784&lng=73.7095365&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    //   )}`
    // );
    // fetch(
    //   `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5946784&lng=73.7095365&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    // );

    fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5946784&lng=73.7095365&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const RestaurantMenuData = await fetchMenu.json();
    setresInfo(RestaurantMenuData?.data);
  };
  useEffect(() => {
    restaurantMenufn();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
