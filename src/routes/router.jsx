import App from "@/App";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound404 from "@/pages/NotFound404";
import AddProduct from "@/pages/products/mainPages/AddProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: { pageTitle: "Dashboard" },
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
        handle: { pageTitle: "Create Product" },
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);

export default router;
