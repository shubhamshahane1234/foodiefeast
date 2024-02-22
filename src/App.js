import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
// import Grocery from "./components/Grocery";
import Footer from "./components/Footer.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      ,
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },

      { path: "/Restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
