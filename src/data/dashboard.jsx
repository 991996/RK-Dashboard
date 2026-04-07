import { BiSolidDollarCircle } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi2";
import { PiMedalFill } from "react-icons/pi";
import { RiContractFill } from "react-icons/ri";

export const cardsData = [
  {
    icon: HiShoppingBag,
    title: "total orders",
    number: 13647,
    percentage: 2.3,
  },
  {
    icon: PiMedalFill,
    title: "New Leads",
    number: 9526,
    percentage: 8.1,
  },
  {
    icon: RiContractFill,
    title: "Deals",
    number: 976,
    percentage: -0.3,
  },
  {
    icon: BiSolidDollarCircle,
    title: "Booked Revenue",
    number: 1236,
    percentage: -10.6,
  },
];

// CHARTS DATA
export const performanceChartData = [
  { name: "Jan", "Page Views": 4000, Clicks: 2040 },
  { name: "Feb", "Page Views": 3000, Clicks: 2210 },
  { name: "Mar", "Page Views": 5000, Clicks: 2900 },
  { name: "Apr", "Page Views": 2780, Clicks: 1100 },
  { name: "May", "Page Views": 5890, Clicks: 4000 },
  { name: "Jun", "Page Views": 4390, Clicks: 2800 },
  { name: "Jul", "Page Views": 6490, Clicks: 5000 },
];

export const productsChartData = [
  { name: "Dresses", value: 400 },
  { name: "T-Shirts", value: 300 },
  { name: "Jeans", value: 250 },
  { name: "Jackets", value: 200 },
  { name: "Sportswear", value: 150 },
  { name: "Accessories", value: 100 },
];
