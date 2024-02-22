import React from "react";

const CartShimmer = () => {
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* Cart Items Skeleton */}
        <div className="rounded-lg md:w-2/3">
          <div className="animate-pulse bg-white rounded-lg mb-6 p-6 shadow-md">
            <div className="flex">
              <div className="h-20 w-20 bg-gray-300 mr-4 rounded-lg"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-300 w-1/2"></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-300 rounded-lg mr-2"></div>
                <div className="h-8 w-8 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-16 bg-gray-300 mr-2"></div>
                <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Subtotal Section Skeleton */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <div className="w-20 h-4 bg-gray-300"></div>
            <div className="w-16 h-4 bg-gray-300"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-20 h-4 bg-gray-300"></div>
            <div className="w-16 h-4 bg-gray-300"></div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between">
            <div className="w-16 h-4 bg-gray-300"></div>
            <div className="">
              <div className="w-24 h-6 bg-gray-300 mb-1"></div>
              <div className="w-12 h-4 bg-gray-300"></div>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartShimmer;
