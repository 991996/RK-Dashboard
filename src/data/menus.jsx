import DashboardIcon from "@/myComponents/icons/DashboardIcon";
import ProductsIcon from "@/myComponents/icons/ProductsIcon";
import CategoryIcon from "@/myComponents/icons/CategoryIcon";
import InventoryIcon from "@/myComponents/icons/InventoryIcon";
import OrdersIcon from "@/myComponents/icons/OrdersIcon";
import PurchasesIcon from "@/myComponents/icons/PurchasesIcon";
import InvoicesIcon from "@/myComponents/icons/InvoicesIcon";
import SettingIcon from "@/myComponents/icons/SettingIcon";

export const menuItems = [
  {
    section: "Dashboard",
    icon: DashboardIcon,
    items: [{ title: "Dashboard", path: "/" }],
  },
  {
    section: "Products",
    icon: ProductsIcon,
    items: [
      { title: "Users", path: "/users" },
      { title: "Products", path: "/products" },
      { title: "Orders", path: "/orders" },
    ],
  },
  {
    section: "Category",
    icon: CategoryIcon,
    items: [{ title: "Reports", path: "/reports" }],
  },
  {
    section: "inventory",
    icon: InventoryIcon,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "orders",
    icon: OrdersIcon,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "purchases",
    icon: PurchasesIcon,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "invoices",
    icon: InvoicesIcon,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "setting",
    icon: SettingIcon,
    items: [{ title: "Settings", path: "/settings" }],
  },
];
