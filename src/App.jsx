import { Outlet, useMatches } from "react-router-dom";
import "./App.css";
import SideBar from "./sideBar/SideBar";
import NavBar from "./navBar/NavBar";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const pageTitle = currentRoute?.handle?.pageTitle || "Page";
  const navActive = currentRoute?.handle?.navActive || "dashboard";
  return (
    <TooltipProvider>
      <div className="flex w-full">
        <div className="hidden lg:block">
          <SideBar navActive={navActive} />
        </div>

        <div className=" w-full flex flex-col gap-0 px-6">
          <NavBar pageTitle={pageTitle} />
          <Outlet />
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;
