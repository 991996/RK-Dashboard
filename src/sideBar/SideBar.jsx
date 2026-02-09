import { menuItems } from "@/data/menus";
import Logo from "@/myComponents/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SideBar() {
  return (
    <div className="lg:h-screen bg-primary-black w-[15%] lg:min-w-50">
      {/* Logo */}
      <div className="flex justify-center items-center py-5">
        <Logo />
        <p className="hidden lg:block uppercase font-bold text-white text-lg">
          Dashboard
        </p>
      </div>

      {/* Content */}
      <div className=" hidden lg:flex flex-col px-6 text-gray-400">
        {menuItems.map((menu, index) => {
          return (
            <Accordion
              key={index}
              type="single"
              collapsible
              defaultValue="item-0"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger
                  className=" cursor-pointer hover:text-gray-50 duration-300
                hover:no-underline"
                >
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-4.5">
                      <menu.icon />
                    </div>
                    <p className="capitalize">{menu.section}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    {menu.items.map((item, i) => {
                      return (
                        <p
                          key={i}
                          className="px-4 font-[450]
                        hover:text-gray-50 duration-300"
                        >
                          {item.title}
                        </p>
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
}
