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
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.SENTRY_DSN,
  sendDefaultPii: true,
  integrations: [
    // send console.log, console.warn, and console.error calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  // Enable logs to be sent to Sentry
  enableLogs: true,
});
Sentry.metrics.count("button_click", 1);
Sentry.metrics.gauge("page_load_time", 150);
Sentry.metrics.distribution("response_time", 200);
Sentry.logger.info("User triggered test log", { log_source: "sentry_test" });
const App = () => {
  return (
    <>
      <Provider store={appStore}>
        {console.log(process.env.SENTRY_DSN)}
        <div className="flex flex-col min-h-[100vh] justify-between">
          <Header className="column" />
          <Outlet className="column" />
          <Footer className="column" />
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
root.render(
  <Sentry.ErrorBoundary fallback={<p>Something went wrong</p>}>
    <RouterProvider router={appRouter} />
  </Sentry.ErrorBoundary>
);
