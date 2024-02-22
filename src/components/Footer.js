import React from "react";
// import logo from "../../public/Assets/site_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container  mx-auto px-4 lg:px-8 flex  flex-col lg:flex-row justify-between items-center">
        {/* <!-- Logo and site name --> */}
        <div className="mb-8 lg:mb-0">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.4dcJ_AHTJ81dikKbJ_xBtgHaGw&pid=Api&P=0&h=180"
            alt="Site Logo"
            className="h-24 mb-2"
          />
          <h1 className="text-lg font-semibold">Foodie Feast</h1>
          {/* <p className="text-gray-400">Bringing food to your doorstep</p> */}
        </div>
        {/* <!-- Sections --> */}
        <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap">
          {/* <!-- Discover --> */}
          <div className="mb-6 lg:mb-0 lg:mr-12">
            <h3 className="text-lg font-semibold mb-2">Discover</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Investors
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Legal --> */}
          <div className="mb-6 lg:mb-0 lg:mr-12">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Support --> */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Social media and legal --> */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* <!-- Social media icons --> */}
          <div className="flex space-x-6 mt-6 lg:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* <!-- Social media icon --> */}
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* <!-- Social media icon --> */}
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* <!-- Social media icon --> */}
              </svg>
            </a>
          </div>
          {/* <!-- Legal information --> */}
          <p className="text-sm text-gray-400 mt-6 lg:mt-0">
            &copy; 2024 Your App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
