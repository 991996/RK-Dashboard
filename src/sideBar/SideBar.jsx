import { menuItems } from "@/data/menus";
import Logo from "@/myComponents/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPinAngleFill, BsFillPinFill } from "react-icons/bs";

export default function SideBar() {
  const [navActive, setNavActive] = useState(menuItems[0]);
  const [pin, setPin] = useState(true);
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`hidden lg:block text-gray-400
      h-screen bg-primary-black
      ${pin ? "w-[20%] min-w-55" : "w-17.5"} 
      duration-300 relative hover:w-70`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Logo */}
      <div
        className={`${
          pin || hover ? "p-6 justify-between" : "py-6 justify-center"
        } flex items-center`}
      >
        <div className="flex items-center">
          <Logo />
          <p
            className={`${
              pin || hover ? "" : "hidden"
            } uppercase font-bold text-white text-lg`}
          >
            Dashboard
          </p>
        </div>
        <div
          className={`cursor-pointer hover:text-gray-50 duration-300
            ${pin || hover ? "" : " hidden"}`}
          onClick={() => setPin((prev) => !prev)}
        >
          {pin ? (
            <div className="text-gray-50">
              <BsFillPinAngleFill size={20} />
            </div>
          ) : (
            <BsFillPinFill size={20} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        {menuItems.map((menu, index) => {
          return !menu.items || (!pin && !hover) ? (
            <Link
              key={index}
              to={menu.path}
              className={`${
                navActive === menu
                  ? "text-gray-50 border-l-4 border-primary-red"
                  : ""
              } px-6 py-3 hover:text-gray-50 duration-300`}
              onClick={() => setNavActive(menu)}
            >
              <NavItem menu={menu} />
            </Link>
          ) : (
            <Accordion
              key={index}
              type="single"
              collapsible
              defaultValue="item-0"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger
                  className={`${
                    navActive === menu
                      ? "text-gray-50 border-l-4 border-primary-red"
                      : ""
                  } px-6 cursor-pointer hover:text-gray-50 duration-300
                hover:no-underline rounded-none`}
                >
                  <NavItem menu={menu} />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 px-6">
                    {menu.items?.map((item, i) => {
                      return (
                        <Link
                          to={item.path}
                          key={i}
                          className="px-4 font-[450]
                        hover:text-gray-50 duration-300"
                          onClick={() => setNavActive(menu)}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );

  function NavItem({ menu }) {
    return (
      <div className="flex items-center gap-4 group">
        <div
          className={`${navActive === menu ? "text-primary-red" : ""} w-4.5`}
        >
          <menu.icon size={20} />
        </div>
        {pin || hover ? <p className="capitalize">{menu.section}</p> : <></>}
      </div>
    );
  }
}
