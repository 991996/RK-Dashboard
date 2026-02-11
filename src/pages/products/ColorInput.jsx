import { Button } from "@/components/ui/button";

export default function ColorInput() {
  const colorsList = [
    "red",
    "black",
    "white",
    "blue",
    "green",
    "yellow",
    "orange",
    "pink",
  ];
  const colorClasses = {
    red: "bg-red-500",
    black: "bg-black",
    white: "bg-white",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
  };
  return (
    <div className="flex gap-2">
      {colorsList.map((color, index) => {
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
