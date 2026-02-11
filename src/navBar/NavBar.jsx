import DarkMode from "./DarkMode";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Activity from "./Activity";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { Logs } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/sideBar/SideBar";

export default function NavBar({ pageTitle = "Dashboard" }) {
  return (
    <div className="w-full sticky top-0 left-0 py-6">
      {/* Content */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300 duration-300">
          {/* SideBar icon */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild className=" cursor-pointer">
                <Logs />
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 border-none">
                <SideBar />
              </SheetContent>
            </Sheet>
          </div>
          {/* page title */}
          <p
            className="uppercase text-lg  md:text-[22px]
        tracking-wide font-hanken font-semibold"
          >
            {pageTitle}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <DarkMode />
          <Notifications />
          <Settings />
          <Activity />
          <Profile />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
