import { Link } from "react-router-dom";
const Shimmer = () => {
  return (
    <>
      <section class="">
        <div class="px-4 py-8 mx-auto max-w-8xl">
          <div class="space-y-4">
            <h2 class="text-3xl font-bold text-center">RESTAURANTS</h2>
          </div>
          <div class="relative w-full p-4 mt-16">
            {/* Grid for restaurant cards */}
            <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Mapping over filterData to render restaurant cards */}
              {Array(15)
                .fill("dummy")
                .map((card, index) => (
                  <Link
                    key={index}
                    to={`/Restaurant/${card?.info?.id}`}
                    className="m-auto"
                  >
                    {/* Shimmer effect skeleton */}
                    <div className="w-80 h-[100%] p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                      {/* Shimmer effect for image */}
                      <div className="bg-gray-200 animate-pulse w-full h-40 rounded-t-lg"></div>

                      <div className="p-4">
                        {/* Shimmer effect for title */}
                        <div className="bg-gray-200 animate-pulse w-3/4 h-6 mb-4"></div>

                        {/* Shimmer effect for rating and delivery time */}
                        <div className="flex items-center space-x-2 text-gray-700">
                          <div className="bg-gray-200 animate-pulse w-4 h-4"></div>
                          <div className="bg-gray-200 animate-pulse w-8 h-4"></div>
                          <div className="bg-gray-200 animate-pulse w-12 h-4"></div>
                          <div className="bg-gray-200 animate-pulse w-8 h-4"></div>
                        </div>

                        {/* Shimmer effect for cuisines */}
                        <div className="bg-gray-200 animate-pulse w-5/6 h-4 mt-2"></div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Shimmer;
