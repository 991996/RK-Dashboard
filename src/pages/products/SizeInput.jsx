import { Button } from "@/components/ui/button";
import { sizeList } from "@/data/productList";

export default function SizeInput({ sizes = sizeList, product, dispatch }) {
  return (
    <div className="flex flex-wrap gap-1">
      {sizes.map((size, index) => {
        return (
          <Button
            key={index}
            type="button"
            className={`cursor-pointer
              ${
                product?.sizes.includes(size)
                  ? "bg-gray-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
              }`}
            onClick={() => {
              dispatch({
                type: "TOGGLE_SIZE",
                payload: size,
              });
            }}
          >
            {size}
          </Button>
        );
      })}
    </div>
  );
}
