import { Button } from "@/components/ui/button";
import { colorClasses, colorsList } from "@/data/productList";

export default function ColorInput({ colors = colorsList }) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color, index) => {
        return (
          <Button
            key={index}
            className="cursor-pointer bg-gray-100 hover:bg-gray-100 p-3"
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
