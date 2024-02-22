import React, { useState } from 'react';
import {CDN_URL} from "../utils/Constants"

const Accordion = (props) => {

    const [ind,setIndex] = useState("")

    const menuList = props?.menuList?.groupedCard?.cardGroupMap?.REGULAR?.cards
    console.log(menuList)

 

  const toggleAccordion = (i) => {
  setIndex(i)
  };

  return (
    <div className=" w-1000 mx-auto">
      {menuList?.map((section, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md">
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-semibold">{section?.card?.card?.title}</h2>
            <svg
              className={`w-4 h-4 text-gray-600 transform transition-transform ${section.isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {/* Accordion Content */}
          <div className={`mt-2 `}>
            {/* Dish List */}
            <ul>
              {section?.card?.card?.itemCards?.map((dish, dishIndex) => (
                <li key={dishIndex} className="flex items-center space-x-4 mt-4">
                  <img 
                  src={`${CDN_URL}${dish?.card?.info?.imageId}`}
                   alt={dish?.card?.info?.name} className="w-16 h-16 object-cover rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold">{dish?.card?.info?.name}</h3>
                    <p className="text-gray-600">{dish?.card?.info?.price}</p>
                    <p className="text-gray-500">{dish?.card?.info?.description}</p>
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