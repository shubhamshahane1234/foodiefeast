import React from "react";

const RestaurantMenuShimmer = () => {
  return (
    <>
      <div className="mx-10 sm:mx-20">
        <section className="container mt-8">
          <div class="mb-4">
            <h1 class="text-2xl font-bold text-gray-800">{name}</h1>
            <div class="flex items-center space-x-2 text-gray-700">
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
              <span class="mx-2">•</span>
              <div className="w-20 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <p class="text-gray-600 mt-2"></p>
          </div>

          {/* Shimmer Effect for Menu List */}
          <div className="max-w-80 lg:mx-auto lg:max-w-2xl lg:px-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md mb-4"
              >
                {/* Accordion Header */}
                <div className="flex justify-between items-center cursor-pointer bg-gray-50 p-4 rounded-md">
                  <div className="w-2/3 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
                {/* Accordion Content */}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default RestaurantMenuShimmer;
