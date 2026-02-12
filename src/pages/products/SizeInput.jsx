import { Button } from "@/components/ui/button";
import { sizeList } from "@/data/productList";

export default function SizeInput({ sizes = sizeList }) {
  return (
    <div className="flex flex-wrap gap-1">
      {sizes.map((size, index) => {
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
