import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className=" hidden md:block relative">
      <div className=" absolute text-gray-500 top-2 left-2">
        <Search size={20} />
      </div>
      <Input placeholder="Search..." className="bg-gray-200 pl-8" />
    </div>
  );
}
