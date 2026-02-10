import { Outlet, useMatches } from "react-router-dom";
import "./App.css";
import SideBar from "./sideBar/SideBar";
import NavBar from "./sideBar/NavBar";

function App() {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const pageTitle = currentRoute?.handle?.pageTitle || "Page";
  return (
    <>
      <div className="flex w-full">
        <SideBar />
        <div className=" w-full flex flex-col gap-0 px-6">
          <NavBar pageTitle={pageTitle} />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
