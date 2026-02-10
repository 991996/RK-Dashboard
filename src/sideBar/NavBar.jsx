import { navBarMenuItems } from "@/data/menus";

export default function NavBar({ pageTitle = "Dashboard" }) {
  return (
    <div className="w-full sticky top-0 left-0 py-6">
      {/* Content */}
      <div className="flex justify-between items-center">
        {/* page title */}
        <p
          className="text-gray-500 uppercase text-[22px]
        tracking-wide font-hanken font-semibold"
        >
          {pageTitle}
        </p>
        <div className="flex gap-4">
          {navBarMenuItems.map((nav, index) => {
            return (
              <div key={index} className="text-gray-400">
                <nav.icon size={26} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
