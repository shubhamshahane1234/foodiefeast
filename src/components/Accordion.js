import React, { useState } from "react";
import { CDN_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState("");
  const dispatch = useDispatch();

  const menuList =
    props?.menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? "" : index));
  };

  return (
    // <div className="  max-w-2xl mx-auto">
    <div className="max-w-80 lg:mx-auto lg:max-w-2xl lg:px-6">
      {menuList?.map((section, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center cursor-pointer bg-gray-50 p-4 rounded-md"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {section?.card?.card?.title}
            </h2>
            <svg
              className={`w-6 h-6 text-gray-600 transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {/* Accordion Content */}
          <div className={`mt-2 ${activeIndex === index ? "" : "hidden"}`}>
            {/* Dish List */}
            <ul className="flex flex-wrap">
              {section?.card?.card?.itemCards?.map((dish, dishIndex) => (
                <li
                  key={dishIndex}
                  className="flex flex-col md:flex-row items-center space-x-4 mt-4 border-b border-gray-300 pb-4 relative"
                >
                  <div className=" w-3/12 relative flex-shrink-0">
                    <img
                      src={`${CDN_URL}${dish?.card?.info?.imageId}`}
                      alt={dish?.card?.info?.name}
                      className="object-cover rounded-sm mb-4 md:mb-0"
                    />
                    {/* Add Button on Image */}
                    <button
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-green-500 py-2 px-4 rounded-md"
                      onClick={() => {
                        dispatch(addItem(dish));
                      }}
                    >
                      Add
                    </button>
                  </div>

                  <div className="  w-9/12 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {dish?.card?.info?.name}
                    </h3>
                    <p className="text-gray-600">{dish?.card?.info?.price}</p>
                    <p className="text-gray-500">
                      {dish?.card?.info?.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
