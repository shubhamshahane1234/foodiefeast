import React from "react";

const RestaurantMenuShimmer = () => {
  return (
    <>
      <div className="mx-10 sm:mx-20">
        <section className="container mt-8">
          <div class="animate-pulse">
            {/* Placeholder for restaurant name */}
            <h1 class="text-2xl font-bold text-gray-800 bg-gray-200 h-8 w-3/4 mb-4"></h1>

            {/* Placeholder for rating, cost, and cuisines */}
            <div class="flex items-center space-x-2 text-gray-700">
              <div class="bg-gray-200 h-4 w-4"></div>
              <div class="bg-gray-200 h-4 w-8"></div>
              <div class="bg-gray-200 h-4 w-12"></div>
            </div>

            {/* Placeholder for cuisines */}
            <p class="text-gray-600 mt-2 bg-gray-200 h-4 w-5/6"></p>
          </div>

          {/* Placeholder for Menu heading */}
          <h2 class="text-2xl lg:text-3xl font-bold text-center mt-8 animate-pulse bg-gray-200 h-8 w-1/2 mx-auto"></h2>

          {/* Placeholder for menu items */}
          <div className="m-auto sm:m-auto lg:max-w-2xl mx-auto px-6">
            {/* Mapping over menuList to render placeholders */}
            {Array(8)
              .fill(1)
              .map((section, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-md mb-4"
                >
                  {/* Accordion Header Placeholder */}
                  <div className="flex justify-between items-center cursor-pointer bg-gray-50 p-4 rounded-md h-10 animate-pulse">
                    <div className="bg-gray-200 h-4 w-3/4"></div>
                    <div className="bg-gray-200 h-6 w-6"></div>
                  </div>

                  {/* Accordion Content Placeholder */}
                  <div className="mt-2 animate-pulse">
                    {/* Placeholder for Dish List */}
                    <ul className="flex flex-wrap"></ul>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default RestaurantMenuShimmer;
