import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TagInput({ product, dispatch }) {
  const inputRef = useRef(null);

  const tags = product.tags || [];

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [previousValues, setPreviousValues] = useState([
    "Jacket",
    "Pants",
    "Watch",
    "Fashion",
    "Skirt",
    "T-shirt",
  ]);

  const filteredValues = previousValues.filter((val) =>
    val.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleAddTag = (value) => {
    const trimmed = value.trim();

    if (!trimmed) return;

    if (!tags.includes(trimmed)) {
      dispatch({
        type: "ADD_TAG",
        payload: trimmed,
      });

      setPreviousValues((prev) => prev.filter((tag) => tag !== trimmed));
    }

    setInputValue("");
    setIsOpen(true);

    requestAnimationFrame(() => {
      inputRef.current?.focus({ preventScroll: true });
    });
  };

  const handleRemoveTag = (tagToRemove) => {
    dispatch({
      type: "REMOVE_TAG",
      payload: tagToRemove,
    });

    setPreviousValues((prev) => {
      if (prev.includes(tagToRemove)) return prev;
      return [...prev, tagToRemove];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTag(inputValue);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="w-full p-2 border rounded-md min-h-9 relative">
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="
                  text-xs flex items-center gap-1
                  bg-primary-red text-white relative z-50
                  px-2 py-1 rounded-md shadow-sm
                "
              >
                <span>{tag}</span>

                <Separator orientation="vertical" />

                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Input + Popover */}
          <Popover open={isOpen && filteredValues.length > 0}>
            <PopoverTrigger asChild>
              <Input
                ref={inputRef}
                value={inputValue}
                placeholder="Add tag..."
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                onBlur={() => {
                  setTimeout(() => setIsOpen(false), 150);
                }}
                className="border-none shadow-none focus-visible:ring-0 p-0 h-6
                 absolute top-0"
              />
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-50 p-1"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              {filteredValues.map((val, idx) => (
                <div
                  key={idx}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleAddTag(val)}
                  className="
                    px-2 py-1.5 text-sm rounded cursor-pointer
                    hover:bg-accent
                  "
                >
                  {val}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </div>
  );
}
