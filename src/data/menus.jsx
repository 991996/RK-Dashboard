import { MdInventory2, MdCategory } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { IoBagHandle, IoSettings } from "react-icons/io5";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaFileInvoiceDollar } from "react-icons/fa6";

export const menuItems = [
  {
    section: "Dashboard",
    icon: TbLayoutDashboardFilled,
    path: "/",
  },
  {
    section: "Products",
    icon: GiClothes,
    items: [
      { title: "Create", path: "/addProduct" },
      { title: "Products", path: "/products" },
      { title: "Orders", path: "/orders" },
    ],
  },
  {
    section: "Category",
    icon: MdCategory,
    items: [{ title: "Reports", path: "/reports" }],
  },
  {
    section: "inventory",
    icon: MdInventory2,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "orders",
    icon: IoBagHandle,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "purchases",
    icon: BiSolidPurchaseTag,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "invoices",
    icon: FaFileInvoiceDollar,
    items: [{ title: "Settings", path: "/settings" }],
  },
  {
    section: "setting",
    icon: IoSettings,
    items: [{ title: "Settings", path: "/settings" }],
  },
];
