import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useLoginMutation } from "./endpoints/handlers/auth";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./components/products/Products";
import Accounts from "./components/accounts/Accounts";
import Settings from "./components/settings/Settings";
import Main from "./components/main/Main";
import NotFound from "./pages/utils/NotFound";
import Login from "./pages/utils/Login";
import RouteProtection from "./components/private-route/RouteProtection";

const App = () => {
  const [login] = useLoginMutation();

  useEffect(() => {
    login({
      email: import.meta.env.VITE_STORED_EMAIL,
      password: import.meta.env.VITE_STORED_PASSWORD,
    });
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/accounts",
          element: <Accounts />,
        },
        {
          path: "/settings",
          element: <Settings />,
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
