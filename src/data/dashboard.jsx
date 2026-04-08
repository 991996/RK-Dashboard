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

export const chartCOLORS = [
  "#6366F1", // Indigo
  "#22C55E", // Green
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#3B82F6", // Blue
  "#A855F7", // Purple
];

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

export const countryChartData = [
  { name: "Qatar", value: 1250 },
  { name: "Saudi Arabia", value: 980 },
  { name: "UAE", value: 870 },
  { name: "Kuwait", value: 640 },
  { name: "Bahrain", value: 520 },
  { name: "Oman", value: 410 },
];

export const topPagesData = [
  { pagePath: "/", pageViews: 5420, exitRate: 0.35 },
  { pagePath: "/products", pageViews: 3890, exitRate: 0.28 },
  { pagePath: "/product/iphone-15", pageViews: 2760, exitRate: 0.22 },
  { pagePath: "/product/macbook-pro", pageViews: 2450, exitRate: 0.25 },
  { pagePath: "/product/airpods-pro", pageViews: 2100, exitRate: 0.27 },
  { pagePath: "/cart", pageViews: 1980, exitRate: 0.45 },
  { pagePath: "/checkout", pageViews: 1540, exitRate: 0.52 },
  { pagePath: "/wishlist", pageViews: 1320, exitRate: 0.33 },
  { pagePath: "/login", pageViews: 1200, exitRate: 0.4 },
  { pagePath: "/register", pageViews: 980, exitRate: 0.38 },
  { pagePath: "/contact", pageViews: 870, exitRate: 0.3 },
  { pagePath: "/about", pageViews: 760, exitRate: 0.26 },
  { pagePath: "/offers", pageViews: 690, exitRate: 0.29 },
  { pagePath: "/blog", pageViews: 610, exitRate: 0.34 },
  { pagePath: "/faq", pageViews: 540, exitRate: 0.31 },
];
