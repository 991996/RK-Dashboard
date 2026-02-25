import App from "@/App";
import AddCategory from "@/pages/category/mainPages/AddCategory";
import EditCategory from "@/pages/category/mainPages/EditCategory";
import ViewCategories from "@/pages/category/mainPages/ViewCategories";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound404 from "@/pages/NotFound404";
import AddedSuccessfully from "@/pages/products/mainPages/AddedSuccessfully";
import AddProduct from "@/pages/products/mainPages/AddProduct";
import EditProduct from "@/pages/products/mainPages/EditProduct";
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
      }, // Products
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
        path: "/editProduct/:productId",
        element: <EditProduct />,
        handle: { pageTitle: "Edit Product", navActive: "products" },
      }, // Category
      {
        path: "/addCategory",
        element: <AddCategory />,
        handle: { pageTitle: "Create Category", navActive: "category" },
      },
      {
        path: "/categories",
        element: <ViewCategories />,
        handle: { pageTitle: "Categories", navActive: "category" },
      },
      {
        path: "/editCategory/:categoryId",
        element: <EditCategory />,
        handle: { pageTitle: "Edit Category", navActive: "category" },
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
