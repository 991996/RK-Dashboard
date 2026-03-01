import { TbMessageCircleDollar } from "react-icons/tb";
import { BsCartX } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdPendingActions } from "react-icons/md";
import { GoStopwatch } from "react-icons/go";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbProgress } from "react-icons/tb";

export const ordersBlocksList = [
  {
    title: "Payment Refund",
    number: 490,
    icon: TbMessageCircleDollar,
  },
  {
    title: "Order Cancel",
    number: 241,
    icon: BsCartX,
  },
  {
    title: "Order Shipped",
    number: 630,
    icon: BsBoxSeam,
  },
  {
    title: "Order Delivering",
    number: 170,
    icon: LiaShippingFastSolid,
  },
  {
    title: "Pending Review",
    number: 210,
    icon: MdPendingActions,
  },
  {
    title: "Pending Payment",
    number: 608,
    icon: GoStopwatch,
  },
  {
    title: "Delivered",
    number: 200,
    icon: IoMdCheckboxOutline,
  },
  {
    title: "In Progress",
    number: 656,
    icon: TbProgress,
  },
];

export const ordersList = [
  {
    orderId: "#5864971",
    createdAt: "Apr 23,2025",
    customer: "Gail C. Anderson",
    priority: "normal",
    total: "$1,235.00",
    paymentStatus: "unpaid",
    items: 4,
    DeliveryNumber: "#D-15648",
    orderStatus: "canceled",
  },
  {
    orderId: "#5864971",
    createdAt: "Apr 23,2025",
    customer: "Gail C. Anderson",
    priority: "normal",
    total: "$1,235.00",
    paymentStatus: "paid",
    items: 4,
    DeliveryNumber: "#D-15648",
    orderStatus: "draft",
  },
  {
    orderId: "#5864971",
    createdAt: "Apr 23,2025",
    customer: "Gail C. Anderson",
    priority: "normal",
    total: "$1,235.00",
    paymentStatus: "refund",
    items: 4,
    DeliveryNumber: "#D-15648",
    orderStatus: "packaging",
  },
];
