import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-gray-800 mb-2">
                <span className="font-semibold">Address:</span> 123 Main Street,
                City, Country
              </p>
              <p className="text-lg text-gray-800 mb-2">
                <span className="font-semibold">Phone:</span> +1234567890
              </p>
              <p className="text-lg text-gray-800 mb-2">
                <span className="font-semibold">Email:</span> info@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
