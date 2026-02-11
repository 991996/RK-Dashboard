import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TagInput() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [previousValues, setPreviousValues] = useState([
    "Jacket",
    "Pants",
    "Watch",
    "Fashion",
    "Skirt",
    "T-shirt",
  ]);

  // قيم سابقة يمكن الاختيار منها
  //   let previousValues = [
  //     "Jacket",
  //     "Pants",
  //     "Watch",
  //     "Fashion",
  //     "Skirt",
  //     "T-shirt",
  //   ];

  const handleAddTag = (value) => {
    const trimmed = value.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setPreviousValues((prev) => prev.filter((tag) => tag !== trimmed));
    setInputValue("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
    setPreviousValues((prev) => [...prev, tagToRemove]);
  };

  return (
    <div className="w-full max-w-md relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTag(inputValue);
        }}
        className="flex gap-2 flex-wrap"
      >
        <div className="w-full p-2 border rounded-md min-h-9">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className=" text-xs flex items-center gap-1 relative z-10
              bg-primary-red text-white px-2 py-1 rounded-md shadow-lg"
              >
                <span>{tag}</span>
                <div className="h-3.25 px-0.5 ">
                  <Separator orientation="vertical" />
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="cursor-pointer p-0"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Dropdown + Input */}
          <DropdownMenu open={isFocused} onOpenChange={setIsFocused}>
            <DropdownMenuTrigger asChild>
              <Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="border-none shadow-none absolute top-0 left-0"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {previousValues
                .filter((val) =>
                  val.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((val, idx) => (
                  <DropdownMenuItem key={idx} onClick={() => handleAddTag(val)}>
                    {val}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </form>
    </div>
  );
}
