import { Button } from "@/components/ui/button";

export default function SizeInput() {
  const sizeList = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
  return (
    <div className="flex gap-1">
      {sizeList.map((size, index) => {
        return (
          <Button
            key={index}
            className="cursor-pointer bg-gray-100 text-gray-800 hover:bg-gray-100"
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
}
