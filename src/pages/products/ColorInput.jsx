import { Button } from "@/components/ui/button";
import { colorClasses, colorsList } from "@/data/productList";

export default function ColorInput({ colors = colorsList, product, dispatch }) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color, index) => {
        return (
          <Button
            key={index}
            type="button"
            className={`cursor-pointer p-3
              ${
                product?.colors.includes(color)
                  ? "bg-gray-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
              }`}
            onClick={() => {
              dispatch({
                type: "TOGGLE_COLOR",
                payload: color,
              });
            }}
          >
            <div
              className={`w-4 aspect-square rounded-full ${colorClasses[color]}`}
            ></div>
          </Button>
        );
      })}
    </div>
  );
}
