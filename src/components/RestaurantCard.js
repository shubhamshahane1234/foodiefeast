import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { id, name, cloudinaryImageId, cuisines, avgRating, sla } =
    props?.cardinfo?.info;
  return (
    <div
      key={id}
      className="w-80 h-[100%] p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt="Card Image"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <div className="p-4">
        <h2
          className="
        text-xl  
        font-semibold"
        >
          {name}
        </h2>
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
          <span> {sla?.deliveryTime}min</span>

          {/* <span>{costForTwoMessage}</span> */}
        </div>

        {/* <p className="text-gray-600 text-wrap"><b>Rating - </b>{avgRating}</p> */}

        <p className="text-gray-600 truncate overflow-hidden ">
          {/* <b>Cuisines - </b> */}
          {cuisines.toString()}
        </p>
      </div>
    </div>
  );
};
export default RestaurantCard;
