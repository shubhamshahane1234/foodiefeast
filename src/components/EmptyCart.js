import React from "react";

const EmptyCart = () => {
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">Your cart is empty</p>
          <p className="text-sm text-gray-500">
            Start adding items to your cart to see them here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
