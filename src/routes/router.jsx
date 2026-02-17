import App from "@/App";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound404 from "@/pages/NotFound404";
import AddedSuccessfully from "@/pages/products/mainPages/AddedSuccessfully";
import AddProduct from "@/pages/products/mainPages/AddProduct";
import ViewProducts from "@/pages/products/mainPages/ViewProducts";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: { pageTitle: "Dashboard", navActive: "dashboard" },
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
        handle: { pageTitle: "Create Product", navActive: "products" },
      },
      {
        path: "/added_successfully",
        element: <AddedSuccessfully />,
        handle: { pageTitle: "Create Product", navActive: "products" },
      },
      {
        path: "/products",
        element: <ViewProducts />,
        handle: { pageTitle: "Products", navActive: "products" },
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
