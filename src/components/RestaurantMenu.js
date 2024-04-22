import React from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../components//Shimmers/RestaurantMenuShimmer";
import { CDN_URL } from "../utils/Constants";
import Accordion from "./Accordion";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const cloudinaryImageId =
    resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId;
  console.log(resInfo);
  return resInfo == null ? (
    <>
      <RestaurantMenuShimmer />
    </>
  ) : (
    <div className="mx-10 sm:mx-20">
      <section className="container  mt-8">
        {/* <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="Restaurant Image"
          class="w-full h-64 object-cover rounded-md shadow-lg mb-4"
        /> */}
        <div class="mb-4">
          <h1 class="text-2xl font-bold text-gray-800">{name}</h1>
          <div class="flex items-center space-x-2 text-gray-700">
            <svg
              class="w-4 h-4 text-yellow-500 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span>{avgRating}</span>
            <span class="mx-2">•</span>
            <span>{costForTwoMessage}</span>
          </div>
          <p class="text-gray-600 mt-2">{cuisines.join(",")}</p>
        </div>

        {/* <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus sem a hendrerit...</p> */}
      </section>
      <Accordion menuList={resInfo?.cards[2]} />
    </div>
  );
};

export default RestaurantMenu;
