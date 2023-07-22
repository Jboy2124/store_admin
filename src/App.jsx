import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./components/products/Products";
import Accounts from "./components/accounts/Accounts";
import Settings from "./components/settings/Settings";
import Main from "./components/main/Main";
import NotFound from "./pages/utils/NotFound";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/products", element: <Products /> },
        { path: "/accounts", element: <Accounts /> },
        { path: "/settings", element: <Settings /> },
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
