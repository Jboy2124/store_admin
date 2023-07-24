import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./components/products/Products";
import Accounts from "./components/accounts/Accounts";
import Settings from "./components/settings/Settings";
import Main from "./components/main/Main";
import NotFound from "./pages/utils/NotFound";
import Login from "./pages/utils/Login";
import RouteProtection from "./components/private-route/RouteProtection";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: (
            <RouteProtection>
              <Main />
            </RouteProtection>
          ),
        },
        {
          path: "/products",
          element: (
            <RouteProtection>
              <Products />
            </RouteProtection>
          ),
        },
        {
          path: "/accounts",
          element: (
            <RouteProtection>
              <Accounts />
            </RouteProtection>
          ),
        },
        {
          path: "/settings",
          element: (
            <RouteProtection>
              <Settings />
            </RouteProtection>
          ),
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
